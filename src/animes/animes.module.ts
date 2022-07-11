import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesResolver } from './animes.resolver';

@Module({
  providers: [AnimesResolver, AnimesService]
})
export class AnimesModule {}
