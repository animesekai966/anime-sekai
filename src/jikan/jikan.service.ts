import { Injectable } from "@nestjs/common";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as https from "https";
import * as http from "http";
import { Client } from "jikan4.js";
@Injectable()
export class JikanService extends Client {
  axios: AxiosInstance;
  constructor() {
    super({
      host: "jikan-san.herokuapp.com",
      keepAlive: true,
      disableCaching: true,
    });
    this.axios = axios.create({
      baseURL: "https://jikan-san.herokuapp.com/v4/",
      httpAgent: new http.Agent({ keepAlive: true }),
      httpsAgent: new https.Agent({ keepAlive: true }),
    });
  }

  async getAnimeRaw(id: number): Promise<AnimeFullRaw> {
    let {
      data: { data },
    } = await this.axios.get(`anime/${id}/full`);
    return data;
  }

  async getPictures(id: number): Promise<AnimePic[]> {
    let {
      data: { data },
    } = await this.axios.get(`anime/${id}/pictures`);
    return data;
  }

  async getAnimeCharacters(id: number) {
    let {
      data: { data },
    } = await this.axios.get(`/anime/${id}/characters`);
    return data;
  }

  async getAnimeStaff(id: number) {
    let {
      data: { data },
    } = await this.axios.get(`/anime/${id}/staff`);
    return data;
  }

  async getAnimePictures(id: number) {
    let {
      data: { data },
    } = await this.axios.get(`/anime/${id}/pictures`);
    return data;
  }

  async getAnimeRecommendations(id: number) {
    let {
      data: { data },
    } = await this.axios.get(`/anime/${id}/recommendations`);
    return data;
  }

  async getCharacter(id: number): Promise<Character> {
    let {
      data: { data },
    } = await this.axios.get(`/characters/${id}/full`);
    return data;
  }

  async getAnimeGenres(
    filter: "genres" | "explicit_genres" | "themes" | "demographics" | null,
  ) {
    let {
      data: { data },
    } = await this.axios.get(
      `/genres/anime${filter ? "?filter=" + filter : ""}`,
    );

    return data;
  }

  async getPerson(id: number): Promise<Person> {
    let {
      data: { data },
    } = await this.axios.get(`/people/${id}/full`);
    return data;
  }

  async getProducer(id: number) {
    let {
      data: { data },
    } = await this.axios.get(`/producers/${id}/full`);
    return data;
  }

  malIdFromUrl(url: string) {
    return Number(url.match(/anime\/([0-9]+)\//)[1]);
  }
}

export const malRatingsToAnimeSekaiRatings = {
  "G - All Ages": "G",
  "PG - Children": "PG",
  "PG-13 - Teens 13 or older": "PG13",
  "R - 17+ (violence & profanity)": "R",
  "R+ - Mild Nudity": "RP",
  "Rx - Hentai": "RX",
};

export const malStatusToAnimeSekaiStatus = {
  "Finished Airing": "FINISHED",
  "Currently Airing": "RELEASING",
  "Not yet aired": "NOT_YET_RELEASED",
};

export const NsfwRatings = ["R+ - Mild Nudity", "Rx - Hentai"];

export interface AnimePic {
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
}

export interface Person {
  mal_id: number;
  url: string;
  website_url: string;
  images: {
    jpg: {
      image_url: string;
    };
  };
  name: string;
  given_name: string;
  family_name: string;
  alternate_names: string[];
  birthday: Date;
  favorites: number;
  about: string;
}

export interface Character {
  mal_id: number;
  url: string;
  images: {
    jpg: {
      image_url: string;
    };
    webp: {
      image_url: string;
      small_image_url: string;
    };
  };
  name: string;
  name_kanji: string;
  nicknames: string[];
  favorites: number;
  about: string;
}

export interface AnimeFullRaw {
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
  trailer: {
    youtube_id: string;
    url: string;
    embed_url: string;
    images: {
      image_url: string;
      small_image_url: string;
      medium_image_url: string;
      large_image_url: string;
      maximum_image_url: string;
    };
  };
  approved: boolean;
  titles: {
    type: string;
    title: string;
  }[];
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
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
    };
    string: string;
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
  year: 1999;
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
  explicit_genres: [];
  themes: [];
  demographics: {
    mal_id: number;
    type: string;
    name: string;
    url: string;
  }[];
  relations: {
    relation: string;
    entry: {
      mal_id: number;
      type: string;
      name: string;
      url: string;
    }[];
  }[];
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
