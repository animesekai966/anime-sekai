import { Injectable } from '@nestjs/common';

import { initializeApp } from 'firebase/app';
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
  getFirestore,
  limit,
  or,
  query,
  where,
} from 'firebase/firestore';

const app = initializeApp(
  {
    storageBucket: 'animewitcher-1c66d.appspot.com',
    projectId: 'animewitcher-1c66d',
  },
  'animewitcher',
);

const db = getFirestore(app);

interface listOptions {
  limit?: number;
}

interface getAnimeOptions {
  name?: string;
  malId?: string;
  include?: {
    episodes?:
      | {
          servers?: boolean;
        }
      | boolean;
  };
}

interface getAnimeEpsOptions {
  name: string;
  include?: {
    servers?: boolean;
  };
}

interface getAnimeEpServersOptions {
  name: string;
  episodeId: string;
}

@Injectable()
export class AwService {
  async listAnime(options: listOptions) {
    const animeList = query(collection(db, 'anime_list'), limit(options.limit));
    const animeListSnapshot = await getDocs(animeList);
    return this.docsData(animeListSnapshot);
  }

  async getAnime({ malId = '', name = '', ...options }: getAnimeOptions) {
    const animeQuery = query(
      collection(db, 'anime_list'),
      or(where('mal_id', '==', malId), where('name', '==', name)),
    );

    const animeListSnapshot = await getDocs(animeQuery);
    const anime = this.docsData(animeListSnapshot)[0] as AwAnime & {
      episodes?: AwEpisode[];
    };

    if (options.include.episodes) {
      const includeServers =
        typeof options.include.episodes === 'object' &&
        options.include.episodes.servers;
      anime.episodes = await this.getAnimeEps({
        name: anime.name,
        include: { servers: includeServers },
      });
    }

    return anime;
  }

  async getAnimeEps(options: getAnimeEpsOptions) {
    const animeEpisodes = await getDocs(
      collection(db, 'anime_list', options.name, 'episodes'),
    );

    if (options.include?.servers) {
      const animeEpsWithServers = animeEpisodes.docs.map(async (doc) => {
        return {
          ...doc.data(),
          servers: await this.getAnimeEpServers({
            name: options.name,
            episodeId: doc.id,
          }),
        };
      });

      return Promise.all(animeEpsWithServers) as Promise<
        (AwEpisode & { servers: AwServer })[]
      >;
    }

    return this.docsData(animeEpisodes) as AwEpisode[];
  }

  async getAnimeEpServers({ episodeId, name }: getAnimeEpServersOptions) {
    const servers = await getDocs(
      collection(db, 'anime_list', name, 'episodes', episodeId, 'servers'),
    );

    return this.docsData(servers) as AwServer[];
  }

  docsData({ docs }: QuerySnapshot<DocumentData, DocumentData>) {
    return docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
  }
}

export interface AwAnime {
  poster: {
    large: string;
    medium: string;
  };
  doc_ref: string;
  average_rate: number;
  bunny_exist: boolean;
  name: string;
  related_anime_ids: {
    relation_type: 'other' | 'sequel' | 'prequel';
    mal_id: number;
  }[];
  youtube_video_id: string;
  mal_id: string;
  duration: number;
  rating: {
    rate: number;
    totalRatingsCount: number;
  };
  tags: string[];
  details: {
    year: string;
    mal_num_scoring_users: string;
    studio: string[];
    end_date: string;
    age: string;
    source: string;
    season_name: string;
    start_date: string;
    season: string;
    mal_mean: number;
    state: string;
    mal_rank: number;
    eps_num: string;
    english_title: string;
  };
  type: string;
  story: string;
  cover_uri: string;
  poster_uri: string;
  statictes: {
    fav_count: number;
  };
  views: number;
}

export interface AwEpisode {
  rate: {
    star1: number;
    star5: number;
    star3: number;
    star4: number;
    star2: number;
  };
  duration: number;
  views: number;
  thumb_uri: string;
  name: string;
  bunny_video_id: string;
  doc_id: string;
  servers: AwServer[];
}

export interface AwServer {
  link: string;
  quality?: '480p' | '720p' | '1080p';
  name: string;
}
