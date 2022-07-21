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

  async getAnime(slug: string) {
    let { data } = await this.fetch({ url: "/anime/" + slug });
    let $ = load(data);
    let animeData = {
      mal: String($(`div.cta-btns > div > a.blue.cta`).attr("href")).trim(),
      poster: `https://animeblkom.net${$(`div.poster > img`).attr("data-original")}`,
      title:  String($(`div.name.col-xs-12 > span > h1`).text()).replace(/\(.+\)/g, "").trim(),
      type:  String($(`div.name.col-xs-12 > span > h1 > small`).text()).replace(/\(|\)/g, "").trim().toUpperCase(),
      score: Number($(`div.pull-right.story-column > div > div.col-xs-12.col-sm-3.dropdown.rating-container > button > span`).text()?.trim()),
      story: String($(`div.col-xs-12.story-container > div.story > p`).text()).trim(),
      episodesCount: String($(`div.info-table > div:nth-child(1) > span.info`).text()).trim(),
      rating: String($(`div.info-table > div:nth-child(2) > span.info`).text()).trim(),
      startDate: new Date($(`div.info-table > div:nth-child(3) > span.info`).text()?.trim()),
      statusAr: String($(`div.info-table > div:nth-child(4) > span.info`).text()).trim(),
      studio: String($(`div.info-cards > div:nth-child(1) > span.info.col-x-8 > a`).text()).trim(),
      episodes: []
    };

    $(`div.pull-right.list-column > div > ul.episodes-links > li.episode-link`).each(function () {
      let $ = load(this);
      let url = $(`a`).attr("href")?.trim()
      animeData.episodes.push({
        url,
        rawNumber: Number(url.match(/watch\/.+\/([0-9]+)/)[1]),
        number: String($(`a > span:nth-child(3)`).text()).trim(),
      })
    })

    return animeData
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

export interface AnimeEntity {}

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
