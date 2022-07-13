import { Injectable } from '@nestjs/common';
import { OrphanedTypesFactory } from '@nestjs/graphql/dist/schema-builder/factories/orphaned-types.factory';
import axios, { AxiosRequestConfig } from 'axios';
import { JikanService, MalFullAnime } from 'src/jikan.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { v4 } from 'uuid';
const log = (...messages: any) =>
  true ? console.log('[SCRAPE]', ...messages) : '';
let malRatings = {
  'G - All Ages': 'G',
  'PG - Children': 'PG',
  'PG-13 - Teens 13 or older': 'PG13',
  'R - 17+ (violence & profanity)': 'R',
  'R+ - Mild Nudity': 'RP',
  'Rx - Hentai': 'RX',
};

let animeXquality = {
  '1080p': 'FHD',
  '720p': 'HD',
  '480p': 'SD',
  '360p': 'SD',
};

let sesons = {
  //WINTER: [12, 1, 2],
  //SPRING: [3, 4, 5],
  //SUMMER: [6, 7, 8],
  //FALL: [9, 10, 11],
  '12': 'WINTER',
  '1': 'WINTER',
  '2': 'WINTER',
  '3': 'SPRING',
  '4': 'SPRING',
  '5': 'SPRING',
  '6': 'SUMMER',
  '7': 'SUMMER',
  '8': 'SUMMER',
  '9': 'FALL',
  '10': 'FALL',
  '11': 'FALL',
};

@Injectable()
export class AnimeXService {
  constructor(
    private prisma: PrismaService,
    private jikanService: JikanService,
  ) {}

  async scrapeAllAnimes() {
    for (let page = 1; page < 74; page++) {
      let animeListPage = await this.getAnimeList(page);
      log(
        `Scraped Page ${page} Got (${animeListPage.length}) Of AnimeX anime list`,
      );
      for (let animeListEntity of animeListPage) {
        let animeExists = await this.prisma.anime.count({
          where: {
            animeXId: animeListEntity.slug,
          },
        });
        if (!animeExists) {
          log(
            `Trying to Scrape ${animeListEntity.name} (${animeListEntity.slug}) From AnimeX`,
          );
          let { allAnimeEps, malAnime, xAnime } = await this.getFullAnime(
            animeListEntity.slug,
          );
          log(
            `Scraped ${animeListEntity.name} (${animeListEntity.slug}) From AnimeX`,
          );
          await this.saveAnime(xAnime, malAnime, allAnimeEps);
          log(`Saved ${animeListEntity.name} (${animeListEntity.slug}) To Db`);
        } else {
          log(
            `Skipping (Already In Db) ${animeListEntity.name} (${animeListEntity.slug}) From AnimeX`,
          );
        }
      }
    }
  }

  async getFullAnime(animeId: string): Promise<{
    xAnime: AnimeInfoEntity;
    malAnime: MalFullAnime;
    allAnimeEps: any[];
  }> {
    let xAnime = await this.getAnimeInfo(animeId);
    if (!xAnime.mal) return;
    log(`Scraped AnimeXInfo`);
    let malAnime = await this.jikanService.getFullAnime(
      Number(xAnime.mal.match(/anime\/([0-9]+)/)[1]),
    );
    log(`Scraped MalInfo`);

    let allAnimeEps = await this.getAnimeEpsWithServers(animeId);
    log(`Scraped AnimeX eps+servers`);

    return { xAnime, malAnime, allAnimeEps };
  }

  async getAnimeEpsWithServers(animeId: string) {
    let allAnimeEps = await this.getAnimeEps(animeId);
    let result = [];
    for (let ep of allAnimeEps) {
      let epServers = await this.getAnimeEpServers(animeId, Number(ep.number));
      console.log(`[SCRAPING] EP ${ep.number} from ${animeId}`);
      result.push({
        id: v4(),
        number: Number(ep.number),
        filler: !!ep.filler,
        servers: epServers.map((server) => ({
          url: server.link,
          quality: animeXquality[server.quality || '1080p'],
          translatedBy: server.fansub,
          createdAt: new Date(),
        })),
      });
    }
    return result;
  }

  async getAnimeList(page: number = 1): Promise<AnimeListEntity[]> {
    return (await this.fetch({ url: 'v3/anime-list/' + page })).data.data;
  }

  async getLatestReleases(page: number = 1) {
    let offset = page * 20;
    return (await this.fetch({ url: 'v4/episodes/newest-episodes/' + offset }))
      .data.data;
  }

  async getAnimeInfo(animeId: string): Promise<AnimeInfoEntity> {
    return (await this.fetch({ url: 'v3/anime/' + animeId + '/info' })).data
      .data;
  }

  async getAnimeEps(animeId: string): Promise<AnimeEpEntity[]> {
    return (await this.fetch({ url: 'v4/episodes/' + animeId })).data.data;
  }

  async getAnimeEpServers(
    animeId: string,
    epNum: number,
  ): Promise<AnimeEpServerEntity[]> {
    return (
      await this.fetch({ url: 'v4/episodes/' + animeId + '/play/' + epNum })
    ).data.data['wlinks'];
  }

  async fetch(settings: AxiosRequestConfig) {
    return axios({
      ...settings,
      url: 'https://s2vc.animex.w7orld.com/' + settings.url,
      headers: {
        AUTH2:
          'c5ce35bc0ad90ba07d83d155fe10d79278ce75133ea3a1b556be8872ce34f830',
        'User-Agent':
          'AnimeX/1.3.8; Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-N975F Build/N2G48H)',
        'Content-Type': 'application/json',
        Connection: 'Keep-Alive',
      },
    });
  }

  async saveAnime(
    xAnime: AnimeInfoEntity,
    malAnime: MalFullAnime,
    allAnimeEps: any[],
  ) {
    let createObj = {
      data: {
        animeXId: xAnime.primary_key,
        malId: malAnime.mal_id,
        title: {
          romaji: malAnime.title,
          english: malAnime.title_english,
          native: malAnime.title_japanese,
          synonyms: malAnime.title_synonyms,
        },
        cover: {
          large: malAnime.images.jpg.large_image_url,
          medium: malAnime.images.jpg.image_url,
          small: malAnime.images.jpg.small_image_url,
        },
        description: {
          ar: xAnime.story,
          en: malAnime.synopsis,
        },
        broadcast: {
          time: malAnime.broadcast?.time,
          timezone: malAnime.broadcast?.timezone,
          day: malAnime.broadcast?.day?.toUpperCase?.() as any,
        },
        duration: malAnime.duration,
        score: {
          mal: {
            score: malAnime.score,
            scoredBy: malAnime.scored_by,
          },
          anilist: {
            score: malAnime.score,
            scoredBy: malAnime.scored_by,
          },
        },
        season: (malAnime.season?.toUpperCase?.() ||
          sesons[malAnime.aired.prop.from.day] ||
          'FALL') as any,
        ageRating: malRatings[malAnime.rating],
        startDate: {
          day: malAnime.aired.prop.from.day,
          month: malAnime.aired.prop.from.month,
          year: malAnime.aired.prop.from.year,
        },
        endDate: {
          day: malAnime.aired.prop.to.day,
          month: malAnime.aired.prop.to.month,
          year: malAnime.aired.prop.to.year,
        },
        type: malAnime.type.toUpperCase() as any,
        openings: malAnime.theme.openings,
        endings: malAnime.theme.endings,
        externalSites: malAnime.external,
        altCovers: malAnime.altImages.map((img) => ({
          large: img.jpg.large_image_url,
          medium: img.jpg.image_url,
          small: img.jpg.small_image_url,
        })),
        genres: {
          connectOrCreate: [
            ...malAnime.genres,
            ...malAnime.themes,
            ...malAnime.explicit_genres,
            ...malAnime.demographics,
          ].map((genre) => ({
            where: {
              malId: genre.mal_id,
            },
            create: {
              malId: genre.mal_id,
              name: genre.name,
            },
          })),
        },
        studios: {
          connectOrCreate: malAnime.studios.map((studio) => ({
            where: { malId: studio.mal_id },
            create: {
              malId: studio.mal_id,
              name: studio.name,
            },
          })),
        },
        producers: {
          connectOrCreate: malAnime.producers.map((producer) => ({
            where: { malId: producer.mal_id },
            create: {
              malId: producer.mal_id,
              name: producer.name,
            },
          })),
        },
        related: malAnime.relations
          .map((relation) =>
            relation.entry.map((entry) => ({
              malId: entry.mal_id,
              relation: relation.relation.toUpperCase().replace(/ /g, '_'),
              type: 'ANIME',
            })),
          )
          .reduce((total, current) => [...total, ...current], []) as any,
        source: malAnime.source,
        episodesCount: malAnime.episodes,
        status: malAnime.status.toUpperCase().replace(/ /g, '_') as any,
        trailer: {
          youtubeId: malAnime.trailer.youtube_id,
        },
        episodes: allAnimeEps as any,
      },
    };
    console.log(createObj);
    return await this.prisma.anime.create(createObj);
  }
}

interface AnimeListEntity {
  slug: string;
  name: string;
  rate: string;
  age: string;
  state: string;
  mal: string;
  type: string;
  released_at: string;
  posters: string[];
  user: {
    is_favorite: false;
  };
}

interface AnimeEpEntity {
  number: string;
  last: number;
  filler: number;
}

interface AnimeEpServerEntity {
  link: string;
  server: string;
  fansub: string;
  quality: string;
}

interface AnimeInfoEntity {
  primary_key: string;
  name: string;
  vid_count: string;
  rate: string;
  story: string;
  age: string;
  state: string;
  mal: string;
  type: string;
  released_at: string;
  duration: string;
  season: string;
  posters: string[];
  genres: { name: string }[];
  studios: { name: string }[];
}
