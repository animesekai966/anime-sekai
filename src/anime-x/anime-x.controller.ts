import { Controller, Get } from '@nestjs/common';
import { AnimeXService } from './anime-x.service';

@Controller('anime-x')
export class AnimeXController {
  constructor(private animeXService: AnimeXService) {}
}
