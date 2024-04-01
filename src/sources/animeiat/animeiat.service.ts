import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import axiosRetry from 'axios-retry';
import * as https from 'https';
import * as http from 'http';
import { RETRY_LIMIT } from '@/constants/requests';

interface listOptions {
  page?: number;
}

interface getAnimeOptions {
  slug: string;

  include?: {
    episodes?:
      | {
          skipPagination?: boolean;
          servers?: boolean;
        }
      | boolean;
  };
}

interface getAnimeEpsOptions {
  slug: string;
  skipPagination?: boolean;
  include?: {
    servers?: boolean;
  };
}

interface getAnimeEpServersOptions {
  episodeSlug: string;
}

@Injectable()
export class AnimeiatService {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.animeiat.co/v1',
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });

    axiosRetry(this.client, {
      retries: RETRY_LIMIT,
      onRetry(retryCount, error, requestConfig) {
        console.log(
          `Retrying request ${requestConfig.url} (${retryCount}), error: ${error.message}`,
        );
      },
    });
  }

  async listAnime(options: listOptions) {
    const { data: animeList } = await this.client.get(
      `/anime?page=${options.page ?? 1}`,
    );

    return animeList.data as Omit<AnimeiatAnime, 'genres' | 'studios' | 'year'>;
  }

  async getAnime({ slug = '', ...options }: getAnimeOptions) {
    const { data: animeResponse } = await this.client.get(`/anime/${slug}`);
    const anime = animeResponse.data as AnimeiatAnime & {
      episodes: AnimeiatEpisode[];
    };

    if (options.include.episodes) {
      const includeServers =
        typeof options.include.episodes === 'object' &&
        options.include.episodes.servers;

      const skipPagination =
        typeof options.include.episodes === 'object' &&
        options.include.episodes.skipPagination;

      anime.episodes = await this.getAnimeEps({
        slug: anime.slug,
        include: { servers: includeServers },
        skipPagination: skipPagination,
      });
    }

    return anime;
  }

  async getAnimeEps(options: getAnimeEpsOptions) {
    const { data: animeEpisodesResponse } = await this.client.get<{
      meta: AnimeiatPaginationMeta;
      data: AnimeiatEpisode[];
    }>(`/anime/${options.slug}/episodes`);

    const firstPageEpisodes = options.include?.servers
      ? await Promise.all(
          animeEpisodesResponse.data.map(async (ep) => {
            return {
              ...ep,
              servers: await this.getAnimeEpServers({
                episodeSlug: ep.slug,
              }),
            };
          }),
        )
      : animeEpisodesResponse.data;
    let animeEpisodes: AnimeiatEpisode[] = [...firstPageEpisodes];

    if (options.skipPagination) {
      const { last_page, current_page } = animeEpisodesResponse.meta;
      let currentPage = current_page;

      console.log(
        `Fetching episodes from page ${currentPage} to ${last_page}...`,
      );

      while (currentPage < last_page) {
        currentPage++;
        const { data: animeEpisodesResponse } = await this.client.get<{
          data: AnimeiatEpisode[];
        }>(`/anime/${options.slug}/episodes?page=${currentPage}`);

        const epsToAdd = options.include?.servers
          ? await Promise.all(
              animeEpisodesResponse.data.map(async (ep) => {
                return {
                  ...ep,
                  servers: await this.getAnimeEpServers({
                    episodeSlug: ep.slug,
                  }),
                };
              }),
            )
          : animeEpisodesResponse.data;

        animeEpisodes = [...animeEpisodes, ...epsToAdd];
      }
    }

    if (options.include?.servers) {
      return animeEpisodes as (AnimeiatEpisode & {
        servers: AnimeiatServer[];
      })[];
    }

    return animeEpisodes;
  }

  async getAnimeEpServers({ episodeSlug }: getAnimeEpServersOptions) {
    const { data: epDataResponse } = await this.client.get(
      `/episode/${episodeSlug}`,
    );
    const epData = epDataResponse.data as AnimeiatEpData;
    const { data: servers } = await this.client.get(
      `/video/${epData.video.slug}/download`,
    );
    const serversData = servers.data as AnimeiatServer[];

    return serversData;
  }
}

export interface AnimeiatPaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface AnimeiatEpData {
  id: number;
  title: string;
  slug: string;
  number: number;
  user_id: number;
  anime_id: number;
  video_id: number;
  poster_path: string;
  published: 1 | 0;
  sticky: 1 | 0;
  published_at: string;
  created_at: string;
  updated_at: string;
  anime: AnimeiatAnime;
  video: {
    id: number;
    name: string;
    slug: string;
    duration: number;
    thumbnail_id: number;
    original: string;
    processing: string;
    progress: string;
    processed_at: string;
    created_at: string;
    updated_at: string;
    thumbnail: {
      id: number;
      path: string;
      video_id: number;
      created_at: string;
      updated_at: string;
    };
  };
}

export interface AnimeiatServer {
  id: number;
  name: 'Ultra' | 'High' | 'medium' | 'low';
  quality: 'FHD' | 'HD' | 'SD';
  label: '1080p' | '720p' | '480p' | '360p';
  disk: string;
  file: string;
  video_id: number;
  created_at: string;
  updated_at: string;
  hash: string;
}

export interface AnimeiatEpisode {
  id: number;
  title: string;
  slug: string;
  number: number;
  user_id: number;
  anime_id: number;
  video_id: number;
  poster_path: string;
  published: 1 | 0;
  sticky: 0 | 1;
  published_at: string;
  created_at: string;
  updated_at: string;
}

export interface AnimeiatAnime {
  id: number;
  anime_name: string;
  slug: string;
  story: string;
  other_names: string;
  total_episodes: number | null;
  age: string;
  type: 'tv' | 'movie' | 'ova' | 'ona' | 'special';
  status: 'ongoing' | 'completed' | 'uploading' | 'ongoing' | 'upcoming';
  poster_path: string;
  published: boolean;
  published_at: string;
  year_id: number;
  created_at: string;
  updated_at: string;
  year: {
    id: number;
    name: string;
    slug: string;
    description: string;
    created_at: string;
    updated_at: string;
  };
  genres: {
    id: number;
    name: string;
    slug: string;
    description: string;
    created_at: string;
    updated_at: string;
    pivot: {
      anime_id: number;
      genre_id: number;
    };
  }[];
  studios: {
    id: number;
    name: string;
    slug: string;
    description: string;
    created_at: string;
    updated_at: string;
    pivot: {
      anime_id: number;
      studio_id: number;
    };
  }[];
}
