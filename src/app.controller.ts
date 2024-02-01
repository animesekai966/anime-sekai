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
import { AppService } from './app.service';
import { AwService } from './sources/aw/aw.service';
import { SaService } from './sources/sa/sa.service';
import { AfService } from './sources/af/af.service';

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
  ) {}

  @Get()
  async getHello() {
    const animeQuery = query(collection(db, 'anime', '1', 'episodes'));
    return this.docsData(await getDocs(animeQuery));
  }

  @Get('/aw/animelist')
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

  @Get('/af/animelist')
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

  @Get('/sa/animelist')
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

  docsData({ docs }: QuerySnapshot<DocumentData, DocumentData>) {
    return docs.map((doc) => {
      return {
        ...doc.data(),
      };
    });
  }
}
