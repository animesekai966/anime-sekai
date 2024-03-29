import https from "https";
import http from "http";
import axios from "axios";
import { Injectable } from "@nestjs/common";
import { load } from "cheerio/lib/slim";
import { AxiosInstance } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import { JikanService } from "src/sources/jikan/jikan.service";

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

const USE_PROXY = true;
const PROXY_URL = `https://cloudt-d.herokuapp.com/api/fetch/`;

@Injectable()
export class AnimeBlkomService {
  axios: AxiosInstance;
  constructor(private jikan: JikanService) {
    const jar = new CookieJar();
    this.axios = wrapper(
      axios.create({
        baseURL: USE_PROXY
          ? `${PROXY_URL}animeblkom.net:443`
          : "https://animeblkom.net",
        httpAgent: new http.Agent({ keepAlive: true }),
        httpsAgent: new https.Agent({ keepAlive: true }),
        headers: {
          "x-requested-with": "XMLHttpRequest",
          "x-url-index": "blkomNet",
        },
      }),
    );
  }

  async getAnimeList(page = 0): Promise<AnimeEntity[]> {
    try {
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
    } catch {
      return await this.getAnimeList(page);
    }
  }

  async getLatest(page = 0, getContent = false): Promise<LatestAnimeEntity[]> {
    try {
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
    } catch {
      return await this.getLatest(page, getContent);
    }
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
      //console.log(err.message);
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
        serverUrl: PROXY_URL + obj.src,
      });
    });

    return sources;
  }

  async getAnime(slug: string, eps = false): Promise<AnimeEntity> {
    try {
      let { data } = await this.axios({ url: "/anime/" + slug });
      let $ = load(data);
      let animeData: AnimeEntity = {
        malId: 0,
        slug: slug,
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
        story: String($(`div.story`).text()).trim(),
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

      animeData.malId = this.jikan.malIdFromUrl(animeData.mal);

      if (animeData.mal) animeData.isOnMal = true;

      if (eps) {
        let moiveSrc = $(`div.video.embed-responsive > iframe`).attr("src");
        if (moiveSrc) {
          animeData.episodes.push({
            url: `https://animeblkom.com/watch/${slug}`,
            rawNumber: 1,
            number: "MOVIE",
            last: true,
            servers: [],
          });
        } else {
          $(
            `div.pull-right.list-column > div > ul.episodes-links > li.episode-link`,
          ).each((_, el) => {
            let $ = load(el);
            let url = $(`a`).attr("href")?.trim();
            if (!url) return;
            let rawNumber = Number(url.match(/watch\/.+\/([0-9]+)/)[1]);
            animeData.episodes.push({
              url,
              rawNumber,
              number: String($(`a > span:nth-child(3)`).text()).trim(),
              last: !!$(`a > span:nth-child(4)`).text(),
              servers: [],
            });
          });
        }
        animeData.episodes = await Promise.all(
          animeData.episodes.map(async (ep) => ({
            ...ep,
            servers: await this.getAnimeEpServers(slug, ep.rawNumber),
          })),
        );
      }

      return animeData;
    } catch (err) {
      console.log(err);
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
  slug: string;
  mal: string;
  malId: number;
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
    last: boolean;
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
