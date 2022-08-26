import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ScheduleModule } from "@nestjs/schedule";
import { PrismaService } from "./prisma/prisma.service";
import { AnimeXService } from "./sources/anime-x/anime-x.service";
import { AnimeBlkomService } from "./sources/anime-blkom/anime-blkom.service";
import { JikanService } from "./sources/jikan/jikan.service";
import { AnilistService } from "./sources/anilist/anilist.service";
import { AnimeBlkomController } from "./sources/anime-blkom/anime-blkom.controller";
import { DiscordService } from "./sources/discord/discord.service";
import { AnimeXController } from "./sources/anime-x/anime-x.controller";
import { AnimeModule } from "./anime/anime.module";
import { UploadService } from "./upload/upload.service";
import { TranslateService } from "./translate/translate.service";
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache";
import { EpisodesModule } from "./episodes/episodes.module";
import { CharactersModule } from "./characters/characters.module";
import { StaffModule } from './staff/staff.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: true,
      introspection: true,
      cache: new InMemoryLRUCache({
        maxSize: Math.pow(2, 20) * 100,
        ttl: 5 * 60 * 1000,
      }),
    }),
    ScheduleModule.forRoot(),
    AnimeModule,
    EpisodesModule,
    CharactersModule,
    StaffModule,
  ],
  controllers: [AppController, AnimeBlkomController, AnimeXController],
  providers: [
    PrismaService,
    AnimeXService,
    AnimeBlkomService,
    JikanService,
    AnilistService,
    UploadService,
    TranslateService,
  ],
  exports: [],
})
export class AppModule {}
