import { Injectable } from '@nestjs/common';
import { load } from 'cheerio/lib/slim';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AnimeBlkomService {
  fetch: AxiosInstance;
  constructor() {
    this.fetch = axios.create({
      baseURL: 'https://animeblkom.net',
    });
  }
  async getLatest(page = 0): Promise<LatestAnimeEntity[]> {
    let { data } = await this.fetch({ url: '/get-videos?page=' + page });
    return data;
  }
  async getAnimeList(page = 0): Promise<AnimeListEntity[]> {
    let pageData: AnimeListEntity[] = [];
    let { data } = await this.fetch({ url: '/anime-list?page=' + page++ });
    let $ = load(data);
    $(`div.content.ratable > div.content-inner`).each(function () {
      let $ = load(this);
      let result: AnimeListEntity = {
        url: $(`div.info > div.overlay > div.details > a.details-btn`).attr("href").trim(),
        poster: $(`div.poster > a > img`).attr('src').trim(),
        content_name: $(`div.info > div.name > a`).text().trim(),
        content_genres: $(`div.info > div.overlay > div.genres > a`).each(function () {
            let $ = load(this);
            return {
                genre_name_ar: $().text().trim(),
                genre_name_url:  $().attr("href").trim()
            }
        }) as any,
        content_studio: $(`div.info > div.overlay > div.story > a`).text().trim(),
        content_studio_url: $(`div.info > div.overlay > div.story > a`).attr("href").trim(),
        content_episodes: 

      };
    });
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
  url: string;
  poster: string;
  content_name: string;
  content_genres: { genre_name_ar: string; genre_name_url: string }[];
  content_year: number | '-';
  content_rating: string | '-';
  content_episodes: string | '-';
  content_score: string | '-';
  content_type_name_ar: string | '-';
  content_studio: string | null;
  content_studio_url: string | null;
}
