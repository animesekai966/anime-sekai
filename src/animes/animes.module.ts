import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesResolver } from './animes.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [AnimesResolver, AnimesService, PrismaService],
})
export class AnimesModule {}
