import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ScheduleModule } from "@nestjs/schedule";
import { PrismaService } from "./prisma/prisma.service";
import { AnimeXService } from "./anime-x/anime-x.service";
import { AnimeBlkomService } from "./anime-blkom/anime-blkom.service";
import { JikanService } from "./jikan/jikan.service";
import { AnilistService } from "./anilist/anilist.service";
import { AnimeBlkomController } from "./anime-blkom/anime-blkom.controller";
import { DiscordService } from "./discord/discord.service";
import { AnimeXController } from "./anime-x/anime-x.controller";
import { AnimeModule } from "./anime/anime.module";
import { UploadService } from './upload/upload.service';
import { TranslateService } from './translate/translate.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: true,
      introspection: true,
      cache: "bounded",
      
    }),
    ScheduleModule.forRoot(),
    AnimeModule,
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
