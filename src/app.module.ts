import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ScheduleModule } from '@nestjs/schedule';
import { AnimeXService } from './anime-x/anime-x.service';
import { AnimesModule } from './animes/animes.module';
import { PrismaService } from './prisma/prisma.service';
import { AnimeXModule } from './anime-x/anime-x.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: true,
    }),
    AnimesModule,
    ScheduleModule.forRoot(),
    AnimeXModule,
  ],
  controllers: [AppController],
  providers: [AppService, AnimeXService, PrismaService],
})
export class AppModule {}
