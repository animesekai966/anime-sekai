import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as https from "https";
import * as http from "http";

@Injectable()
export class AnimeXService {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: "https://api.animex.w7orld.com/",
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      headers: {
        "x-requested-with": "XMLHttpRequest",
        auth: "3fc09d4110a3942c16cf0000879c83f3e6593579",
        auth2: "IiQ6ThfhaS91BGuARDzEe6IdqTgQL1mTIyrSyKf6AQqBZc8ykCiwJpn",
        version_name: "1.4.0",
        "user-agent":
          "AnimeX/1.4.0; Dalvik/2.1.0 (Linux; U; Android 7.1.2; SM-N975F Build/N2G48H)",
      },
    });
  }
  async getLatest(page = 0): Promise<LatestAnimeEntity[]> {
    let offset = page * 20;
    let {
      data: { data },
    } = await this.axios({ url: "v4/episodes/newest-episodes/" + offset });

    return data.map((anime) => ({
      number: anime.number,
      last: !!anime.last,
      filler: !!anime.filler,
      content: {
        name: anime.content.name,
        slug: anime.content.slug,
        poster: anime.content.poster,
        mal_url: anime.content.mal_url,
      },
    }));
  }

  async getAnimeList(page = 0): Promise<AnimeListEntity[]> {
    let offset = page * 25;
    let {
      data: { data },
    } = await this.axios({ url: `v4/anime/list?start_from=${offset}&q=` });
    return data;
  }

  async getAnime(slug: string) {}
}

export interface LatestAnimeEntity {
  number: string;
  last: boolean;
  filler: boolean;
  content: {
    name: string;
    slug: string;
    poster: string;
    mal_url: string;
  };
}

export interface AnimeListEntity {
  primary_key: string;
  name: string;
  rate: number;
  age: string;
  state: string;
  mal: string;
  type: string;
  released_at: string;
  posters: string[];
}
