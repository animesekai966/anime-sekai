import { DocumentData, QuerySnapshot } from 'firebase/firestore';
interface listOptions {
    limit?: number;
}
interface getAnimeOptions {
    name?: string;
    malId?: string;
    include?: {
        episodes?: {
            servers?: boolean;
        } | boolean;
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
export declare class AwService {
    listAnime(options: listOptions): Promise<{
        [x: string]: any;
    }[]>;
    getAnime({ malId, name, ...options }: getAnimeOptions): Promise<AwAnime & {
        episodes?: AwEpisode[];
    }>;
    getAnimeEps(options: getAnimeEpsOptions): Promise<AwEpisode[]>;
    getAnimeEpServers({ episodeId, name }: getAnimeEpServersOptions): Promise<AwServer[]>;
    docsData({ docs }: QuerySnapshot<DocumentData, DocumentData>): {
        [x: string]: any;
    }[];
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
export {};
