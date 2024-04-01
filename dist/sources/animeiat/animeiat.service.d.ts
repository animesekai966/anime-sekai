import { AxiosInstance } from 'axios';
interface listOptions {
    page?: number;
}
interface getAnimeOptions {
    slug: string;
    include?: {
        episodes?: {
            skipPagination?: boolean;
            servers?: boolean;
        } | boolean;
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
export declare class AnimeiatService {
    client: AxiosInstance;
    constructor();
    listAnime(options: listOptions): Promise<Omit<AnimeiatAnime, "genres" | "studios" | "year">>;
    getAnime({ slug, ...options }: getAnimeOptions): Promise<AnimeiatAnime & {
        episodes: AnimeiatEpisode[];
    }>;
    getAnimeEps(options: getAnimeEpsOptions): Promise<AnimeiatEpisode[]>;
    getAnimeEpServers({ episodeSlug }: getAnimeEpServersOptions): Promise<AnimeiatServer[]>;
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
export {};
