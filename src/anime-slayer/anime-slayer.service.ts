import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as https from "https";
import * as http from "http";
import { AnilistService } from "src/anilist/anilist.service";
import { AnimeListEntity } from "src/anime-x/anime-x.service";

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

  async getAnime(anime_id: number): Promise<AnimeFull> {
    let {
      data: { response: data },
    } = await this.axios({
      url: `/anime/public/anime/get-anime-details?anime_id=${anime_id}&fetch_episodes=Yes&more_info=Yes`,
    });

    let trackerId = await this.anilistService.getAsAnime(
      {
        anime_id: data.anime_id,
        anime_name: data.anime_name,
        anime_type: data.anime_type,
        anime_status: data.anime_status,
        anime_season: data.anime_season,
        anime_release_year: data.anime_release_year,
      },
    );

    return {
      ...data,
      trackerId,
      anime_id: data.anime_id,
      anime_name: data.anime_name,
      anime_type: data.anime_type,
      anime_status: data.anime_status,
      just_info: data.just_info,
      anime_featured: data.anime_featured,
      anime_season: data.anime_season,
      anime_release_year: data.anime_release_year,
      anime_age_rating: data.anime_age_rating,
      anime_rating: data.anime_rating,
      anime_rating_user_count: data.anime_rating_user_count,
      anime_description: data.anime_description,
      anime_cover_image: data.anime_cover_image,
      anime_cover_image_full: data.anime_cover_image,
      anime_banner_image: data.anime_banner_image,
      anime_trailer_url: data.anime_trailer_url,
      anime_english_title: data.anime_english_title,
      anime_keywords: data.anime_keywords.split(","),
      anime_updated_at: new Date(data.anime_updated_at),
      anime_created_at: new Date(data.anime_created_at),
      anime_genre_ids: data.anime_genre_ids.split(","),
      anime_genres: data.anime_genres.split(","),
      anime_release_day: data.anime_release_day,
      anime_cover_image_url: data.anime_cover_image_url,
      anime_cover_image_full_url: data.anime_cover_image_full_url,
      anime_banner_image_url: data.anime_banner_image_url,
      anime_updated_at_format: new Date(data.anime_updated_at_format),
      anime_created_at_format: new Date(data.anime_created_at_format),
      more_info_result: {
        score: data.more_info_result.score,
        scored_by: data.more_info_result.scored_by,
        trailer_url: data.more_info_result.trailer_url,
        source: data.more_info_result.source,
        episodes: data.more_info_result.episodes,
        duration: data.more_info_result.duration,
        aired_from: new Date(data.more_info_result.aired_from),
        aired_to: data.more_info_result.aired_to
          ? new Date(data.more_info_result.aired_to)
          : null,
        anime_studio_ids: data.more_info_result.anime_studio_ids.split(","),
        anime_studios: data.more_info_result.anime_studios.split(","),
      },
      related_animes: data.related_animes.data,
      related_news: data.related_news,
      content_rating: data.content_rating,
      episodes: data.episodes.data,
    };
  }
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

export interface AnimeFull {
  malId: number;
  anilistId: number;
  anime_id: number;
  anime_name: string;
  anime_type: string;
  anime_status: string;
  just_info: string;
  anime_featured: string;
  anime_season: string;
  anime_release_year: string;
  anime_age_rating: string;
  anime_rating: string;
  anime_rating_user_count: string;
  anime_description: string;
  anime_cover_image: string;
  anime_cover_image_full: string;
  anime_banner_image: string;
  anime_trailer_url: string;
  anime_english_title: string;
  anime_keywords: string[];
  anime_updated_at: Date;
  anime_created_at: Date;
  anime_genre_ids: number[];
  anime_genres: string[];
  anime_release_day: string;
  anime_cover_image_url: string;
  anime_cover_image_full_url: string;
  anime_banner_image_url: string;
  anime_updated_at_format: Date;
  anime_created_at_format: Date;
  more_info_result: {
    score: number;
    scored_by: number;
    trailer_url: string;
    source: string;
    episodes: string;
    duration: string;
    aired_from: Date;
    aired_to: Date;
    anime_studio_ids: number[];
    anime_studios: string[];
  };
  related_animes: AnimeListEntity[];
  related_news: [];
  content_rating: {
    content_type:
      | "frightening_scene"
      | "alcohol_drugs"
      | "profanity"
      | "violence"
      | "nudity";
    level: "none" | "severe";
    vote_count: number;
  }[];
  episodes: {
    episode_id: number;
    episode_name: string;
    episode_number: number;
    allow_comment: string;
    skip_from: number;
    skip_to: number;
    episode_rating: number;
    episode_rating_user_count: number;
    episode_urls: {
      episode_url_id: number;
      episode_server_id: number;
      episode_server_name: "cdn" | "muilt";
      episode_url: string;
    }[];
  }[];
}
