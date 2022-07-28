import { Injectable } from "@nestjs/common";
import { load } from "cheerio/lib/slim";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as https from "https";
import * as http from "http";
const fetchServers = [
  "https://blkomFetch.sekai9666.repl.co",
  "https://blkomFetch1.sekai9666.repl.co",
  "https://blkomFetch2.sekai9666.repl.co",
  "https://blkomFetch3.sekai9666.repl.co",
  "https://blkomFetch4.sekai9666.repl.co",
  "https://blkomFetch5.sekai9666.repl.co",
  "https://blkomFetch6.sekai9666.repl.co",
  "https://blkomFetch7.sekai9666.repl.co",
  "https://blkomFetch8.sekai9666.repl.co",
  "https://blkomFetch9.sekai9666.repl.co",
  "https://blkomFetch10.sekai9666.repl.co",
];

@Injectable()
export class AnimeBlkomService {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: "https://animeblkom.net",
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      headers: {
        "x-requested-with": "XMLHttpRequest",
      },
    });
  }

  async getAnimeList(page = 0): Promise<AnimeEntity[]> {
    let { data } = await this.axios({ url: "/anime-list?page=" + page++ });
    let slugs: string[] = [];
    let $ = load(data);
    $(`div.poster > a`).each((_, el) => {
      slugs.push(
        String(el.attributes.find((att) => att.name === "href")?.value)
          .replace(/\/(anime|watch)\//, "")
          .replace(/\//g, ""),
      );
    });

    return Promise.all(
      slugs.map(async (slug) => {
        let content = await this.getAnime(slug, false);
        return content;
      }),
    );
  }

  async getLatest(page = 0, getContent = false): Promise<LatestAnimeEntity[]> {
    let { data } = await this.axios({ url: "/get-videos?page=" + page });
    return Promise.all(
      data.map(async (obj: LatestAnimeEntity) => {
        let content = getContent
          ? await this.getAnime(obj.content_name_url, false)
          : {};
        return {
          ...obj,
          content,
        };
      }),
    );
  }

  async getAnimeEpServers(slug: string, ep = 1): Promise<AnimeEpServer[]> {
    try {
      let { data } = await this.axios({ url: "/watch/" + slug + "/" + ep });
      let servers = [];
      let $ = load(data);
      $(`span.server`).each((_, el) => {
        let $$ = load(el);
        let server = {
          name: $$("a").text()?.trim(),
          translatedBy: $$("span")
            .attr("class")
            .replace(/server|active/g, "")
            .replace(/\-/g, " ")
            .trim(),
          url: $$("a").attr("data-src"),
        };
        if (server.name === "Blkom") servers.push(server);
      });

      console.log(`[EP SCRAPER] ${ep}`);
      return servers;
    } catch (err) {
      return await this.getAnimeEpServers(slug, ep);
    }
  }

  async getAnimeEpServersRawVideoUrl(blkomEmbedUrl: string) {
    let { data } = await this.axios({ url: blkomEmbedUrl });
    let $ = load(data);
    let sources: {
      url: string;
      res: string;
      type: string;
    }[] = [];

    $(`video > source`).each((_, el) => {
      let srcTag = load(el)(`source`);
      let obj: any = srcTag.attr();
      sources.push({
        ...obj,
        serverUrl:
          "http://localhost:3000/anime-blkom/stream?src=" +
          obj.src +
          "&embed=" +
          blkomEmbedUrl,
      });
    });

    return sources;
  }

  async getAnime(slug: string, eps = false): Promise<AnimeEntity> {
    try {
      let { data } = await this.axios({ url: "/anime/" + slug });
      let $ = load(data);
      let animeData = {
        mal: String($(`div.cta-btns > div > a.blue.cta`).attr("href")).trim(),
        poster: `https://animeblkom.net${$(`div.poster > img`).attr(
          "data-original",
        )}`,
        title: String($(`div.name.col-xs-12 > span > h1`).text())
          .replace(/\(.+\)/g, "")
          .trim(),
        type: String($(`div.name.col-xs-12 > span > h1 > small`).text())
          .replace(/\(|\)/g, "")
          .trim()
          .toUpperCase(),
        score: Number(
          $(
            `div.pull-right.story-column > div > div.col-xs-12.col-sm-3.dropdown.rating-container > button > span`,
          )
            .text()
            ?.trim(),
        ),
        story: String(
          $(`div.col-xs-12.story-container > div.story > p`).text(),
        ).trim(),
        episodesCount: String(
          $(`div.info-table > div:nth-child(1) > span.info`).text(),
        ).trim(),
        rating: String(
          $(`div.info-table > div:nth-child(2) > span.info`).text(),
        ).trim(),
        startDate: new Date(
          $(`div.info-table > div:nth-child(3) > span.info`).text()?.trim(),
        ),
        statusAr: String(
          $(`div.info-table > div:nth-child(4) > span.info`).text(),
        ).trim(),
        studio: String(
          $(`div.info-cards > div:nth-child(1) > span.info.col-x-8 > a`).text(),
        ).trim(),
        episodes: [],
        isOnMal: false,
      };

      if (animeData.mal) animeData.isOnMal = true;

      if (eps) {
        $(
          `div.pull-right.list-column > div > ul.episodes-links > li.episode-link`,
        )
          //@ts-ignore
          .each(async (_, el) => {
            let $ = load(el);
            let url = $(`a`).attr("href")?.trim();
            let rawNumber = Number(url.match(/watch\/.+\/([0-9]+)/)[1]);
            animeData.episodes.push({
              url,
              rawNumber,
              number: String($(`a > span:nth-child(3)`).text()).trim(),
            });
          });

        animeData.episodes = await Promise.all(
          animeData.episodes.map(async (ep) => ({
            ...ep,
            servers: await this.getAnimeEpServers(slug, ep.rawNumber),
          })),
        );
      }

      return animeData;
    } catch (err) {
      return this.getAnime(slug, eps);
    }
  }
}

/*  TYPES  */
export interface LatestAnimeEntity {
  vid_num: number;
  url: string;
  content_id: number;
  content_name: string;
  content_name_url: string;
  type_type: string;
  type_name: string;
  type_name_ar: string;
  poster: string;
  views: number;
  content?: AnimeEntity;
}

export interface AnimeEntity {
  mal: string;
  poster: string;
  title: string;
  type: string;
  score: number;
  story: string;
  episodesCount: string;
  rating: string;
  startDate: Date;
  statusAr: string;
  studio: string;
  episodes: {
    url: string;
    rawNumber: number;
    number: string;
    servers: {
      name: string;
      translatedBy: string;
      url: string;
    }[];
  }[];
  isOnMal: boolean;
}

export interface AnimeEpServer {
  name: string;
  translatedBy: string;
  url: string;
}

/*

export interface AnimeListEntity {
  url: string; *
  poster: string; * 
  content_name: string; *
  content_genres: { genre_name_ar: string; genre_name_url: string }[];
  content_year: number; *
  content_rating: string; *
  content_episodes: number; *
  content_score: number; *
  content_type_name_ar: string; *
  content_studio: string | null; *
  content_studio_url: string | null; *
}


*/
