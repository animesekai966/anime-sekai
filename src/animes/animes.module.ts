import { Module } from '@nestjs/common';
import { AnimesService } from './animes.service';
import { AnimesResolver } from './animes.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
import { MongoDBService } from 'src/mongo-db/mongo-db.service';

@Module({
  providers: [AnimesResolver, AnimesService, PrismaService, MongoDBService],
})
export class AnimesModule {}
