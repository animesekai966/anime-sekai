import { Controller, Get } from '@nestjs/common';
import { AnimeXService } from './anime-x.service';

@Controller('anime-x')
export class AnimeXController {
  constructor(private animeXService: AnimeXService) {}
  @Get('/start')
  async startScrape() {
    this.animeXService.fullScrape();
    return 'starting... please check logs';
  }
}
