import { AxiosInstance } from 'axios';
interface listOptions {
    page: number;
}
interface getAnimeOptions {
    id?: string;
    include?: {
        episodes?: {
            servers?: boolean;
        };
    };
}
interface getAnimeEpServersOptions {
    episodeId: string;
}
export declare class SaService {
    client: AxiosInstance;
    constructor();
    listAnime(options: listOptions): Promise<SaListAnime[] | SaListAnime[][]>;
    getAnime({ id, include }: getAnimeOptions): Promise<SaAnime>;
    getAnimeEpServers({ episodeId }: getAnimeEpServersOptions): Promise<SaEpisodeServer>;
    decode(string: string): string;
}
export interface SaEpisodeServer {
    id: string;
    hd: string;
    sd: string;
}
export interface SaEpisode {
    id: string;
    name: string;
    epName: number;
    date: string;
    servers: SaEpisodeServer;
}
export interface SaListAnime {
    id: string;
    name: string;
    image: string;
    status: string;
}
export interface SaAnime {
    id: string;
    name: string;
    image: string;
    tag: string;
    animeBackground: string;
    total: number;
    story: string;
    genre: {
        name: string;
    }[];
    youtube: true;
    anime_status: string;
    anime_release: string;
    anime_age: string;
    keywords: string;
    start_date: string;
    score: string;
    type: string;
    ep: [SaEpisode[]];
    youtube_link: string;
    youtube_image: string;
    youtube_id: string;
    cover: string;
    background: string;
    reaction: [[], [], [], [], [], []];
    reactList: [number, number, number, number, number, number];
    userIp: string;
    season: [];
    other: {
        id: string;
        name: string;
        image: string;
        epName: string;
        date: string;
    }[];
}
export {};
