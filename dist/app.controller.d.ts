import { DocumentData, QuerySnapshot } from 'firebase/firestore';
import { AppService } from './app.service';
import { AwService } from './sources/aw/aw.service';
import { SaService } from './sources/sa/sa.service';
import { AfService } from './sources/af/af.service';
export declare class AppController {
    private readonly appService;
    private readonly awService;
    private readonly saService;
    private readonly afService;
    constructor(appService: AppService, awService: AwService, saService: SaService, afService: AfService);
    getHello(): Promise<{
        [x: string]: any;
    }[]>;
    getAnimeList(limit: number): Promise<{
        [x: string]: any;
    }[]>;
    getAnime(malId?: string, name?: string, includeEps?: boolean, includeEpServers?: boolean): Promise<import("./sources/aw/aw.service").AwAnime & {
        episodes?: import("./sources/aw/aw.service").AwEpisode[];
    }>;
    getAnimeListAf(limit: number): Promise<{
        [x: string]: any;
    }[]>;
    getAnimeAf(id?: string, malId?: string, includeEps?: boolean): Promise<QuerySnapshot<DocumentData, DocumentData> | (import("./sources/af/af.service").AfAnime & {
        episodes?: import("./sources/af/af.service").AfEpisode[];
    })>;
    getAnimeListSA(page?: number): Promise<import("./sources/sa/sa.service").SaListAnime[] | import("./sources/sa/sa.service").SaListAnime[][]>;
    getAnimeSA(id: string, includeEpServers?: boolean): Promise<import("./sources/sa/sa.service").SaAnime>;
    docsData({ docs }: QuerySnapshot<DocumentData, DocumentData>): {
        [x: string]: any;
    }[];
}
