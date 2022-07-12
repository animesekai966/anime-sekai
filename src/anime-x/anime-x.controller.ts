import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnimeXService } from './anime-x.service';

@Controller('anime-x')
export class AnimeXController {
  constructor(private animeXService: AnimeXService, private prisma: PrismaService) {}

  @Get("seed-g")
  async mommey() {
    
  }
}
