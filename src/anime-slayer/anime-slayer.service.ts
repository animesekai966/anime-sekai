import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as https from "https";
import * as http from "http";
import { AnilistService } from "src/anilist/anilist.service";

@Injectable()
export class AnimeSlayerService {
  axios: AxiosInstance;
  constructor(private anilistService: AnilistService) {
    this.axios = axios.create({
      baseURL: "https://anslayer.com",
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
      headers: {
        "client-id": "android-app2",
        "client-secret": "7befba6263cc14c90d2f1d6da2c5cf9b251bfbbd",
      },
    });
  }

  async getLatest(page = 0): Promise<AnimeLatestEntity[]> {
    let options = {
      _offset: 0,
      _limit: 100,
      _order_by: "latest_first",
      list_type: "latest_updated_episode_new",
      just_info: "Yes",
      more_info: "Yes",
      fetch_episodes: "Yes",
    };
    options._offset = page * options._limit;
    let {
      data: {
        response: { data },
      },
    } = await this.axios({
      url:
        "/anime/public/animes/get-published-animes?json=" +
        JSON.stringify(options),
    });

    return await this.anilistService.getAsAnimes(data);
  }

  async getAnime() {}
}

export interface AnimeLatestEntity {
  malId: number;
  anilistId: number;
  anime_id: number;
  anime_name: string;
  anime_type: string;
  anime_status: string;
  just_info: string;
  anime_season: string;
  anime_release_year: string;
  anime_rating: number;
  latest_episode_id: number;
  latest_episode_name: string;
  anime_cover_image_url: string;
  anime_trailer_url: string;
  anime_release_day: string;
}
