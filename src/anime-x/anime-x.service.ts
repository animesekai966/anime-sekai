import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import https from "https";
import http from "http";

@Injectable()
export class AnimeXService {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: "https://api.animex.w7orld.com/",
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      headers: {
        AUTH: "3fc09d4110a3942c16cf0000879c83f3e6593579",
        AUTH2: "IiQ6ThfhaS91BGuARDzEe6IdqTgQL1mTIyrSyKf6AQqBZc8ykCiwJpn",
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

  async getAnime({
    mal,
    slug,
    fetchEps = false,
    fetchServers = false,
  }: {
    mal?: string;
    slug?: string;
    fetchEps?: boolean;
    fetchServers?: boolean;
  }): Promise<AnimeEntity> {
    try {
      let {
        data: { data },
      } = await this.axios({
        url: slug
          ? `v3/anime/${slug}/info?related=true`
          : `v4/anime/mal/info?mal_url=${mal}`,
      });

      return {
        ...data,
        episodes: fetchEps
          ? await this.getAnimeEps(data.primary_key, fetchServers)
          : [],
      };
    } catch {
      return null;
    }
  }

  async getAnimeEps(
    slug: string,
    fetchServers = false,
  ): Promise<AnimeEpEntity[]> {
    try {
      let {
        data: { data },
      } = await this.axios({ url: `v4/episodes/${slug}` });

      return await Promise.all(
        data.map(async (ep: any) => {
          return {
            number: ep.number,
            rawNumber: Number(String(ep.number)?.match(/([0-9]+)/g)?.[0]),
            last: !!ep.last,
            filler: !!ep.filler,
            servers: fetchServers
              ? await this.getAnimeEpServers(slug, ep.number)
              : [],
          };
        }),
      );
    } catch {
      return await this.getAnimeEps(slug, fetchServers);
    }
  }

  async getAnimeEpServers(slug: string, epNum: string) {
    let {
      data: { data },
    } = await this.axios({ url: `v4/episodes/${slug}/play/` + epNum });
    return data.wlinks;
  }
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

export interface AnimeEntity {
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
  duration: string | null;
  season: string;
  posters: string[];
  genres: {
    name: string;
  }[];
  studios: {
    name: string;
  }[];
  related: {
    data: AnimeListEntity[];
  };
  episodes: AnimeEpEntity[];
}

export interface AnimeEpEntity {
  number: string;
  rawNumber: number;
  last: boolean;
  filler: boolean;
  servers: { link: string; server: string; fansub: string; quality: string }[];
}
