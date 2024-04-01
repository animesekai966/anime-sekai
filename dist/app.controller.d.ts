import { AppService } from '@/app.service';
import { AfService } from '@/sources/af/af.service';
import { AnimeiatEpisode, AnimeiatService } from '@/sources/animeiat/animeiat.service';
import { AwService } from '@/sources/aw/aw.service';
import { BlService } from '@/sources/bl/bl.service';
import { SaService } from '@/sources/sa/sa.service';
import { DocumentData, QuerySnapshot } from 'firebase/firestore';
export declare class AppController {
    private readonly appService;
    private readonly awService;
    private readonly saService;
    private readonly afService;
    private readonly blService;
    private readonly animeiatService;
    constructor(appService: AppService, awService: AwService, saService: SaService, afService: AfService, blService: BlService, animeiatService: AnimeiatService);
    getHello(): Promise<{
        [x: string]: any;
    }[]>;
    getAnimeList(limit: number): Promise<{
        [x: string]: any;
    }[]>;
    getAnime(malId?: string, name?: string, includeEps?: boolean, includeEpServers?: boolean): Promise<import("@/sources/aw/aw.service").AwAnime & {
        episodes?: import("@/sources/aw/aw.service").AwEpisode[];
    }>;
    getAnimeListAf(limit: number): Promise<{
        [x: string]: any;
    }[]>;
    getAnimeAf(id?: string, malId?: string, includeEps?: boolean): Promise<import("@/sources/af/af.service").AfAnime & {
        episodes?: import("@/sources/af/af.service").AfEpisode[];
    }>;
    getAnimeListSA(page?: number): Promise<import("@/sources/sa/sa.service").SaListAnime[] | import("@/sources/sa/sa.service").SaListAnime[][]>;
    getAnimeSA(id: string, includeEpServers?: boolean): Promise<import("@/sources/sa/sa.service").SaAnime>;
    getAnimeListAnimeiat(page?: number): Promise<Omit<import("@/sources/animeiat/animeiat.service").AnimeiatAnime, "genres" | "studios" | "year">>;
    getAnimeAnimeiat(slug: string, includeEps?: boolean, skipPagination?: boolean, includeEpServers?: boolean): Promise<import("@/sources/animeiat/animeiat.service").AnimeiatAnime & {
        episodes: AnimeiatEpisode[];
    }>;
    getAnimeAnimeiatLinks(slug: string, quality: 'low' | 'medium' | 'High'): Promise<string>;
    getAnimeListBl(page?: number): Promise<Omit<import("@/sources/bl/bl.service").BlkomAnime, "malId" | "genres" | "status" | "malUrl" | "altTitles">[]>;
    getAnimeBl(slug: string, type: string, includeEps?: boolean, includeEpServers?: boolean): Promise<import("@/sources/bl/bl.service").BlkomAnime>;
    docsData({ docs }: QuerySnapshot<DocumentData, DocumentData>): {
        [x: string]: any;
    }[];
}
