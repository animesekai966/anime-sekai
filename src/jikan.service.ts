import { Injectable } from '@nestjs/common';
import axios, { AxiosRequestConfig } from 'axios';
let rateLimit = 3;
setInterval(() => (rateLimit = 3), 1100);

@Injectable()
export class JikanService {
  async getFullAnime(malId: number): Promise<MalFullAnime> {
    try {
      let [baseAnime, animePictures, animeRecommendations] = await Promise.all([
        await axios
          .get(`https://api.jikan.moe/v4/anime/${malId}/full`)
          .then((req) => req.data.data),
        await axios
          .get(`https://api.jikan.moe/v4/anime/${malId}/pictures`)
          .then((req) => req.data.data),
        await axios
          .get(`https://api.jikan.moe/v4/anime/${malId}/recommendations`)
          .then((req) => req.data.data),
      ]);
      rateLimit = 0;
      return {
        ...baseAnime,
        altImages: animePictures,
        recommendations: animeRecommendations,
      };
    } catch (err) {
      await this.rateLimitReset();
      return await this.getFullAnime(malId);
    }
  }

  async rateLimitReset() {
    return new Promise((resolve) => {
      setInterval(function () {
        if (rateLimit === 3) return resolve(clearInterval(this));
      }, 250);
    });
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

export { MalFullAnime };
