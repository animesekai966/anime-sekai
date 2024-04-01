import { AppService } from '@/app.service';
import { AfService } from '@/sources/af/af.service';
import {
  AnimeiatEpisode,
  AnimeiatServer,
  AnimeiatService,
} from '@/sources/animeiat/animeiat.service';
import { AwService } from '@/sources/aw/aw.service';
import { BlService, BlkomParsedUrl } from '@/sources/bl/bl.service';
import { SaService } from '@/sources/sa/sa.service';
import { Controller, Get, Query } from '@nestjs/common';
import { initializeApp } from 'firebase/app';
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
  getFirestore,
  query,
} from 'firebase/firestore';

const app = initializeApp({
  storageBucket: 'animefirev4.appspot.com',
  projectId: 'animefirev4',
});

const db = getFirestore(app);

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly awService: AwService,
    private readonly saService: SaService,
    private readonly afService: AfService,
    private readonly blService: BlService,
    private readonly animeiatService: AnimeiatService,
  ) {}

  @Get()
  async getHello() {
    const animeQuery = query(collection(db, 'anime', '1', 'episodes'));
    return this.docsData(await getDocs(animeQuery));
  }

  @Get('/aw/list')
  async getAnimeList(@Query('limit') limit: number) {
    return this.awService.listAnime({ limit });
  }

  @Get('/aw/anime')
  async getAnime(
    @Query('malId') malId?: string,
    @Query('name') name?: string,
    @Query('include.episodes') includeEps?: boolean,
    @Query('include.episodes.servers') includeEpServers?: boolean,
  ) {
    return this.awService.getAnime({
      malId,
      name,
      include: {
        episodes: includeEps ? { servers: includeEpServers } : includeEps,
      },
    });
  }

  @Get('/af/list')
  async getAnimeListAf(@Query('limit') limit: number) {
    return this.afService.listAnime({ limit });
  }

  @Get('/af/anime')
  async getAnimeAf(
    @Query('id') id?: string,
    @Query('malId') malId?: string,
    @Query('include.episodes') includeEps?: boolean,
  ) {
    return this.afService.getAnime({
      id,
      malId,
      include: {
        episodes: includeEps,
      },
    });
  }

  @Get('/sa/list')
  async getAnimeListSA(@Query('page') page?: number) {
    return this.saService.listAnime({ page });
  }

  @Get('/sa/anime')
  async getAnimeSA(
    @Query('id') id: string,
    @Query('include.episodes.servers') includeEpServers?: boolean,
  ) {
    return this.saService.getAnime({
      id: id,
      include: {
        episodes: { servers: includeEpServers },
      },
    });
  }

  @Get('/animeiat/list')
  async getAnimeListAnimeiat(@Query('page') page?: number) {
    return this.animeiatService.listAnime({ page });
  }

  @Get('/animeiat/anime')
  async getAnimeAnimeiat(
    @Query('slug') slug: string,
    @Query('include.episodes') includeEps?: boolean,
    @Query('include.episodes.skipPagination') skipPagination?: boolean,
    @Query('include.episodes.servers') includeEpServers?: boolean,
  ) {
    return this.animeiatService.getAnime({
      slug: slug,
      include: {
        episodes: includeEps
          ? { servers: includeEpServers, skipPagination }
          : includeEps,
      },
    });
  }

  @Get('/animeiat/anime/links')
  async getAnimeAnimeiatLinks(
    @Query('slug') slug: string,
    @Query('quality') quality: 'low' | 'medium' | 'High',
  ) {
    const anime = await this.animeiatService.getAnime({
      slug: slug,
      include: {
        episodes: { servers: true, skipPagination: true },
      },
    });

    return (
      anime.episodes as (AnimeiatEpisode & { servers: AnimeiatServer[] })[]
    ).map((ep) => {
      const server = ep.servers.find((server) => server.name === quality);

      return server.file;
    }).join("\n");
  }

  @Get('/bl/list')
  async getAnimeListBl(@Query('page') page?: number) {
    // const callBack = async (index: number) => {
    //   const list = await this.blService.listAnime({ page: index });
    //   console.log(`Index: ${index}, results: ${list.length}`);
    //   return list;
    // };

    // const result = await runInParallel({
    //   start: 1,
    //   end: 211,
    //   batchSize: 211,
    //   callback: callBack.bind(this),
    // });

    // const flatResult = result.flat();

    // return { length: flatResult.length, data: flatResult };

    return this.blService.listAnime({ page });
  }

  @Get('/bl/anime')
  async getAnimeBl(
    @Query('slug') slug: string,
    @Query('type') type: string,
    @Query('include.episodes') includeEps?: boolean,
    @Query('include.episodes.servers') includeEpServers?: boolean,
  ) {
    return this.blService.getAnime({
      slug: slug,
      type: type as BlkomParsedUrl['mediaType'],
      include: {
        episodes: includeEps ? { servers: includeEpServers } : includeEps,
      },
    });
  }

  docsData({ docs }: QuerySnapshot<DocumentData, DocumentData>) {
    return docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
  }
}
