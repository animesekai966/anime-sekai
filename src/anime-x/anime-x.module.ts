import { Module } from '@nestjs/common';
import { AnimeXService } from './anime-x.service';
import { AnimeXController } from './anime-x.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { JikanService } from 'src/jikan.service';
import { MongoDBService } from 'src/mongo-db/mongo-db.service';

@Module({
  imports: [],
  providers: [AnimeXService, PrismaService, JikanService, MongoDBService],
  controllers: [AnimeXController],
})
export class AnimeXModule {}
