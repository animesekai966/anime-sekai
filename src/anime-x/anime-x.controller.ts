import { Controller, Get, Query } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import axios from 'axios';
import { MongoDBService } from 'src/mongo-db/mongo-db.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnimeXService } from './anime-x.service';

let scrapingState = false;

@Controller('anime-x')
export class AnimeXController {
  constructor(
    private animeXService: AnimeXService,
    private prisma: PrismaService,
    private mongoDBService: MongoDBService,
  ) {}

  @Get('/search')
  async search(@Query('query') query: string) {
    return await this.mongoDBService.search(query);
  }

  @Get('/test')
  async dd(): Promise<any> {
    this.animeXService.checkForNewEpsAndSave()
  }
}

/*

  
  
  

*/

async function slowmode(time: number) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(console.log('waited ', time)), time),
  );
}

interface MalProducer {
  mal_id: number;
  name: string;
  url: string;
  count: number;
}
