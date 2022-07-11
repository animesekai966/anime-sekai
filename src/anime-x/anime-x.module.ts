import { Module } from '@nestjs/common';
import { AnimeXService } from './anime-x.service';
import { AnimeXController } from './anime-x.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JikanService } from './jikan.service';

@Module({
  providers: [AnimeXService, PrismaService, JikanService],
  controllers: [AnimeXController]
})
export class AnimeXModule {}
