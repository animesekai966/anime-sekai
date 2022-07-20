import { Injectable } from "@nestjs/common";
import { load } from "cheerio/lib/slim";
import axios, { AxiosInstance } from "axios";
import * as https from "https";
import * as http from "http";

@Injectable()
export class AnimeBlkomService {
  fetch: AxiosInstance;
  constructor() {
    this.fetch = axios.create({
      baseURL: "https://animeblkom.net",
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });
  }
  async getLatest(page = 0): Promise<LatestAnimeEntity[]> {
    let { data } = await this.fetch({ url: "/get-videos?page=" + page });
    return data;
  }

  async getAnimeList(page = 0): Promise<AnimeListEntity[]> {
    let fetch = this.fetch;
    let pageData: { rawUrl: string; mal: string }[] = [];
    let { data } = await fetch({ url: "/anime-list?page=" + page++ });
    let $ = load(data);
    $(`div.content.ratable > div.content-inner`).each(function () {
      let $ = load(this);
      pageData.push({
        rawUrl: $(`div.poster > a`).attr("href"),
      } as any);
    });
    return pageData as any;
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
}

export interface AnimeListEntity {
  mal: string;
  rawUrl: string;
  url: string;
  poster: string;
  content_name: string;
  content_genres: { genre_name_ar: string; genre_name_url: string }[];
  content_year: number;
  content_rating: string;
  content_episodes: number;
  content_score: number;
  content_type_name_ar: string;
  content_studio: string | null;
  content_studio_url: string | null;
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
