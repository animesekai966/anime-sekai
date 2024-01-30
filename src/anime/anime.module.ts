import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeResolver } from './anime.resolver';

@Module({
  providers: [AnimeResolver, AnimeService],
})
export class AnimeModule {}
