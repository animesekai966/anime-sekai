import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';

@Injectable()
export class JikanService {
  async getFullAnime(malId: number): Promise<MalFullAnime> {
    let baseAnime = await axios
      .get(`https://api.jikan.moe/v4/anime/${malId}/full`)
      .then((req) => req.data.data);
    let animePictures = await axios
      .get(`https://api.jikan.moe/v4/anime/${malId}/pictures`)
      .then((req) => req.data.data);
    let animeRecommendations = await axios
      .get(`https://api.jikan.moe/v4/anime/${malId}/recommendations`)
      .then((req) => req.data.data);

    return {
      ...baseAnime,
      altImages: animePictures,
      recommendations: animeRecommendations,
    };
  }
}

interface MalFullAnime {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  };
  altImages: {
    jpg: {
      image_url: string;
      small_image_url: string;
      large_image_url: string;
    };
  }[];
  recommendations: {
    entry: {
      mal_id: number;
      url: string;
      images: {
        jpg: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
        webp: {
          image_url: string;
          small_image_url: string;
          large_image_url: string;
        };
      };
      title: string;
    };
  }[];
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
  };
  approved: boolean;
  titles: string[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: true;
  aired: {
    from: string;
    to: string;
    prop: {
      from: {
        day: number;
        month: number;
        year: number;
      };
      to: {
        day: number;
        month: number;
        year: number;
      };
      string: string;
    };
  };
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: {
    day: string;
    time: string;
    timezone: string;
    string: string;
  };
  producers: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  licensors: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  studios: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  explicit_genres: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  themes: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  demographics: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  relations: [
    {
      relation: string;
      entry: {
        mal_id: number;
        type: string;
        name: string;
        url: string;
      }[];
    },
  ];
  theme: {
    openings: string[];
    endings: string[];
  };
  external: {
    name: string;
    url: string;
  }[];
  streaming: {
    name: string;
    url: string;
  }[];
}
