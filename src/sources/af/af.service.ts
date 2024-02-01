import { Injectable } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import {
  DocumentData,
  QuerySnapshot,
  collection,
  doc,
  getDocs,
  getFirestore,
  limit,
  or,
  query,
  where,
} from 'firebase/firestore';

const app = initializeApp(
  {
    storageBucket: 'animefirev4.appspot.com',
    projectId: 'animefirev4',
  },
  'animefire',
);

const db = getFirestore(app);

interface listOptions {
  limit?: number;
}

interface getAnimeOptions {
  id?: string;
  malId?: string;
  include?: {
    episodes?: boolean;
  };
}

interface getAnimeEpsOptions {
  id: number;
}

@Injectable()
export class AfService {
  async listAnime(options: listOptions) {
    const animeList = query(collection(db, 'anime'), limit(options.limit));
    const animeListSnapshot = await getDocs(animeList);
    return this.docsData(animeListSnapshot);
  }

  async getAnime({ malId = '', id = '', ...options }: getAnimeOptions) {
    const animeQuery = query(collection(db, 'documents', 'anime', id));

    const animeListSnapshot = await getDocs(animeQuery);

    return animeListSnapshot;
    const anime = this.docsData(animeListSnapshot)[0] as AfAnime & {
      episodes?: AfEpisode[];
    };

    if (options.include.episodes) {
      anime.episodes = await this.getAnimeEps({
        id: anime.id,
      });
    }

    return anime;
  }

  async getAnimeEps(options: getAnimeEpsOptions) {
    const animeEpisodes = await getDocs(
      collection(db, 'anime', String(options.id), 'episodes'),
    );

    return this.docsData(animeEpisodes) as AfEpisode[];
  }

  docsData({ docs }: QuerySnapshot<DocumentData, DocumentData>) {
    return docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
  }
}

export interface AfAnime {
  duration: string;
  themes: string[];
  age_group: string;
  popularity: number;
  aired: {
    to: string;
    from: string;
  };
  title_english: string;
  source: string;
  image_url_2: string;
  mal_id: number;
  members: number;
  year: number;
  id: number;
  search_keywords: string[];
  studios: string[];
  categories: string[];
  watchedDone: number;
  story: string;
  complete_it_later: number;
  average_ratings: number;
  name_in_arabic: string;
  title_japanese: string;
  added_at: {
    seconds: number;
    nanoseconds: number;
  };
  country: string;
  image_url: string;
  trailer_url: string;
  type: string;
  parts_name: string;
  views: number;
  scored_by: number;
  demographics: string[];
  premiered: string;
  rank: number;
  publishing: boolean;
  status: string;
  votes: {
    '1': number;
    '2': number;
    '3': number;
    '4': number;
    '5': number;
    '6': number;
    '7': number;
    '8': number;
    '9': number;
    '10': number;
  };
  quality: string;
  mal_url: string;
  favorite: number;
  WLWI: number;
  genres: string;
  rating_count: number;
  watchingNow: number;
  rating_value: number;
  name: string;
  related: boolean;
  mal_rating: number;
  number_of_episodes: number;
}

export interface AfEpisode {
  quality: 'FHD' | 'HD' | 'SD'[];
  image: string;
  urls: string[];
  idEpisode: number;
  rating_value: number;
  votes: {
    '1': number;
    '2': number;
    '3': number;
    '4': number;
    '5': number;
    '6': number;
    '7': number;
    '8': number;
    '9': number;
    '10': number;
  };
  rating_count: number;
  average_ratings: number;
}
