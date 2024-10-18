import { Injectable } from '@nestjs/common';
import { gotScraping } from 'got-scraping';
import * as cheerio from 'cheerio/lib/slim';
import { cleanString, extractEpisodeNumber } from '@/utils/clean-string';
import * as https from 'https';
import * as http from 'http';
import { EP_BATCH_SIZE, RETRY_LIMIT } from '@/constants/requests';
import { JikanService } from '../jikan/jikan.service';
import { runInParallel } from '@/utils/run-in-parallel';

interface listOptions {
  page?: number;
}

interface getAnimeOptions {
  slug: string;
  type: BlkomParsedUrl['mediaType'];
  include?: {
    episodes?:
      | {
          servers?: boolean;
        }
      | boolean;
  };
}

interface getAnimeEpsOptions {
  slug: string;
  type: BlkomParsedUrl['mediaType'];
  include?: {
    servers?: boolean;
  };
}

interface getAnimeEpServersOptions {
  slug: string;
  episodeNumber: number;
}

const SORUCE_URL = 'http://103.155.92.42';

@Injectable()
export class BlService {
  client: typeof gotScraping;

  constructor(private readonly jikanService: JikanService) {
    this.client = gotScraping.extend({
      agent: {
        http: new http.Agent({ keepAlive: true }),
        https: new https.Agent({ keepAlive: true }),
      },
      retry: {
        limit: RETRY_LIMIT,
        methods: ['GET', 'PUT', 'HEAD', 'DELETE', 'OPTIONS', 'TRACE'],
        statusCodes: [408, 413, 429, 500, 502, 503, 504, 521, 522, 524],
        errorCodes: [
          'ETIMEDOUT',
          'ECONNRESET',
          'EADDRINUSE',
          'ECONNREFUSED',
          'EPIPE',
          'ENOTFOUND',
          'ENETUNREACH',
          'EAI_AGAIN',
        ],
      },
    });
  }

  async listAnime(
    options: listOptions,
  ): Promise<
    Omit<BlkomAnime, 'malId' | 'malUrl' | 'status' | 'genres' | 'altTitles'>[]
  > {
    const { body, statusCode } = await this.client.get(
      `${SORUCE_URL}/animes-list?page=${options.page ?? 1}`,
    );

    console.log(`StatusCode: ${statusCode}`);

    const $ = cheerio.load(body);

    return $(
      `section.list-section.grid-view > div > div.contents.text-center > div`,
    )
      .map((_i, el) => {
        const animeUrl = $(el).find('div.info > div.name > a').attr('href');
        const parsedUrl = this.parseUrl(animeUrl);

        return {
          url: parsedUrl,
          title: cleanString($(el).find('div.info > div.name > a').text()),
          image: $(el).find('div.poster > a > img').attr('src'),
          description: cleanString(
            $(el).find('div.info > div.overlay > div.story > div > p').text(),
          ),
          episodesCount: parseInt(
            cleanString(
              $(el)
                .find('div.info > div.badges > div[title="عدد الحلقات"]')
                .text(),
            ),
          ),
          score: parseFloat(
            cleanString(
              $(el).find('div.info > div.badges > div.badge.dark-red').text(),
            ),
          ),
          year: parseInt(
            cleanString(
              $(el)
                .find('div.info > div.badges > div[title="سنة الانتاج"]')
                .text(),
            ),
          ),
          type: parsedUrl.mediaType,
        };
      })
      .toArray();
  }

  async getAnime({ slug, type, ...options }: getAnimeOptions) {
    const url = `${SORUCE_URL}/${type}/${slug}`;
    const { body } = await this.client.get(url);
    const $ = cheerio.load(body);
    const parsedUrl = this.parseUrl(url);
    const malUrl = cleanString(
      $(`div.cta-btns > div > a.blue.cta`).attr('href'),
    );
    const malId = this.jikanService.malIdFromUrl(malUrl);

    const anime: BlkomAnime = {
      url: parsedUrl,
      image: `https://animeblkom.net${$(`div.poster > img`).attr(
        'data-original',
      )}`,
      title: cleanString($(`div.name.col-xs-12 > span > h1`).text()),
      type: cleanString(
        $(`div.name.col-xs-12 > span > h1 > small`).text(),
      ).toLocaleLowerCase() as any,
      score: parseFloat(
        cleanString(
          $(
            `div.pull-right.story-column > div > div.col-xs-12.col-sm-3.dropdown.rating-container > button > span`,
          ).text(),
        ),
      ),
      description: cleanString($(`div.story`).text()),
      episodesCount: parseInt(
        cleanString($(`div.info-table > div:nth-child(1) > span.info`).text()),
      ),
      status: cleanString(
        $(`div.info-table > div:nth-child(4) > span.info`).text(),
      ),
      year: parseInt(
        cleanString(
          $(`div.info-table > div:nth-child(3) > span.info`).text(),
        ).split('-')[0],
      ),
      altTitles: $(`div.col-xs-12 > div.names > span`)
        .map((_i, el) => cleanString($(el).text()))
        .toArray(),
      genres: $(`div.col-xs-12 > p.genres > a`)
        .map((_i, el) => cleanString($(el).text()))
        .toArray(),
      malId,
      malUrl,
    };

    if (options.include.episodes) {
      const includeServers =
        typeof options.include.episodes === 'object' &&
        options.include.episodes.servers;

      //@ts-expect-error -- type
      anime.episodes = await this.getAnimeEps({
        slug: anime.url.animeSlug,
        type: anime.url.mediaType,
        include: { servers: includeServers },
      });

      return anime as BlkomAnime & { episodes: any[] };
    }

    return anime;
  }

  async getAnimeEps({ type, slug, ...options }: getAnimeEpsOptions) {
    const { body } = await this.client.get(`${SORUCE_URL}/${type}/${slug}`);
    const $ = cheerio.load(body);

    const episodes = $(
      `section.anime-info-section > div > div > div.pull-right.list-column > div > ul > li`,
    )
      .map((_i, el) => {
        const anchor = $(el).find('a');
        const episodeUrl = anchor.attr('href');
        const episodeNumber = extractEpisodeNumber(cleanString(anchor.text()));
        const parsedUrl = this.parseUrl(episodeUrl);

        return {
          url: parsedUrl,
          number: episodeNumber,
        } satisfies BlkomEpisode;
      })
      .toArray();

    if (options.include.servers) {
      return (
        await runInParallel({
          start: 0,
          end: episodes.length - 1,
          batchSize: EP_BATCH_SIZE,
          callback: async (index) => {
            const episode = episodes[index];

            //@ts-expect-error -- type
            episode.servers = await this.getAnimeEpServers({
              slug: episode.url.animeSlug,
              episodeNumber: episode.url.episodeNumber,
            });

            return episode;
          },
        })
      ).flat();
    }
  }

  async getAnimeEpServersRawVideoUrl(blkomEmbedUrl: string) {
    const { body } = await this.client.get(blkomEmbedUrl);
    const $ = cheerio.load(body);

    const sources: BlkomVideo[] = [];

    $(`video > source`).each((_, el) => {
      const srcTag = cheerio.load(el)(`source`);
      const obj = srcTag.attr() as unknown as BlkomVideo;
      sources.push({
        ...obj,
      });
    });

    return sources;
  }

  async getAnimeEpServers({ slug, episodeNumber }: getAnimeEpServersOptions) {
    const { body } = await this.client.get(
      `${SORUCE_URL}/watch/${slug}/${episodeNumber}`,
    );

    const $ = cheerio.load(body);

    const servers = $(`span.server`)
      .map(async (_, el) => {
        const $$ = cheerio.load(el);
        const name = cleanString($$('a').text());

        if (name.toLowerCase() !== 'Blkom'.toLocaleLowerCase()) return;

        return {
          name: cleanString($$('a').text()),
          translatedBy: $$('span')
            .attr('class')
            .replace(/server|active/g, '')
            .replace(/\-/g, ' ')
            .trim(),
          videos: await this.getAnimeEpServersRawVideoUrl(
            $$('a').attr('data-src'),
          ),
        } satisfies BlkomServer;
      })
      .toArray();

    return (await Promise.all(servers))[0];
  }

  parseUrl(url: string): BlkomParsedUrl {
    console.log(url);

    const urlParts = url.split('/');
    const mediaTypes = ['watch', 'anime', 'movie', 'ona', 'ova', 'special'];
    let mediaType: string | undefined;
    let animeSlug: string | undefined;
    let episodeNumber: number | undefined;

    for (const type of mediaTypes) {
      const typeIndex = urlParts.indexOf(type);
      if (typeIndex !== -1 && typeIndex < urlParts.length - 1) {
        mediaType = type;
        animeSlug = urlParts[typeIndex + 1];
        if (type === 'watch') {
          episodeNumber = parseInt(urlParts[typeIndex + 2]);
        }

        break;
      }
    }

    if (!mediaType || !animeSlug) {
      throw new Error('Invalid URL format');
    }

    return {
      mediaType: mediaType as BlkomParsedUrl['mediaType'],
      animeSlug,
      episodeNumber,
      url,
    };
  }
}

export interface BlkomAnime {
  url: BlkomParsedUrl;
  image: string;
  title: string;
  altTitles: string[];
  malId: number;
  malUrl: string;
  type: BlkomParsedUrl['mediaType'];
  description: string;
  genres: string[];
  episodesCount: number;
  status: string;
  score: number;
  year: number;
}

export interface BlkomEpisode {
  url: BlkomParsedUrl;
  number: number;
}

export interface BlkomServer {
  name: string;
  translatedBy: string;
  videos: BlkomVideo[];
}

export interface BlkomVideo {
  src: string;
  type: string;
  label: string;
  res: string;
}

export interface BlkomParsedUrl {
  url: string;
  mediaType?: 'anime' | 'movie' | 'special' | 'ona' | 'ova';
  animeSlug: string;
  episodeNumber?: number;
}
