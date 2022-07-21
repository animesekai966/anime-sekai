import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { ScheduleModule } from "@nestjs/schedule";
import { AnimesModule } from "./animes/animes.module";
import { PrismaService } from "./prisma/prisma.service";
import { AnimeSlayerService } from "./anime-slayer/anime-slayer.service";
import { AnimeXService } from "./anime-x/anime-x.service";
import { AnimeBlkomService } from "./anime-blkom/anime-blkom.service";
import { JikanService } from "./jikan/jikan.service";
import { AnilistService } from "./anilist/anilist.service";
import { AnimeBlkomController } from "./anime-blkom/anime-blkom.controller";
import { DiscordService } from "./discord/discord.service";

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: true,
    }),
    AnimesModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, AnimeBlkomController],
  providers: [
    PrismaService,
    AnimeSlayerService,
    AnimeXService,
    AnimeBlkomService,
    JikanService,
    AnilistService,
    DiscordService,
  ],
  exports: [],
})
export class AppModule {}
