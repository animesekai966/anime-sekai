import { Controller, Get, Query } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import axios from 'axios';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnimeXService } from './anime-x.service';
let scrapingState = false;

@Controller('anime-x')
export class AnimeXController {
  constructor(
    private animeXService: AnimeXService,
    private prisma: PrismaService,
  ) {}

  @Get('/scrape-all')
  async dd(): Promise<any> {
    if (!scrapingState) {
      this.animeXService.scrapeAllAnimes();
      scrapingState = true;
      return 'Started Please Check The Console';
    }

    return 'Already Running err(1)';
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
