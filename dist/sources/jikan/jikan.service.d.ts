import { AxiosInstance } from 'axios';
import { Client } from 'jikan4.js';
export declare class JikanService extends Client {
    axios: AxiosInstance;
    constructor();
    getAnimeRaw(id: number): Promise<AnimeFullRaw>;
    getPictures(id: number): Promise<AnimePic[]>;
    getAnimeCharacters(id: number): Promise<any>;
    getAnimeStaff(id: number): Promise<any>;
    getAnimePictures(id: number): Promise<any>;
    getAnimeRecommendations(id: number): Promise<any>;
    getCharacter(id: number): Promise<Character>;
    getAnimeGenres(filter: 'genres' | 'explicit_genres' | 'themes' | 'demographics' | null): Promise<any>;
    getPerson(id: number): Promise<Person>;
    getProducer(id: number): Promise<any>;
    malIdFromUrl(url: string): number;
}
export declare const malRatingsToAnimeSekaiRatings: {
    'G - All Ages': string;
    'PG - Children': string;
    'PG-13 - Teens 13 or older': string;
    'R - 17+ (violence & profanity)': string;
    'R+ - Mild Nudity': string;
    'Rx - Hentai': string;
};
export declare const malStatusToAnimeSekaiStatus: {
    'Finished Airing': string;
    'Currently Airing': string;
    'Not yet aired': string;
};
export declare const NsfwRatings: string[];
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
