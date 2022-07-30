import { Module } from "@nestjs/common";
import { AnimeService } from "./anime.service";
import { AnimeResolver } from "./anime.resolver";
import { AnimeController } from "./anime.controller";
import { JikanService } from "src/jikan/jikan.service";
import { PrismaService } from "src/prisma/prisma.service";
import { AnimeBlkomService } from "src/anime-blkom/anime-blkom.service";
import { AnimeXService } from "src/anime-x/anime-x.service";
import { AnilistService } from "src/anilist/anilist.service";
import { UploadService } from "src/upload/upload.service";
import { AnimeManager } from "./anime.manager";
import { TranslateService } from "src/translate/translate.service";
import { AnimeJobs } from "./anime.jobs";

@Module({
  providers: [
    AnimeResolver,
    AnimeService,
    JikanService,
    PrismaService,
    AnimeBlkomService,
    AnimeXService,
    AnilistService,
    UploadService,
    AnimeManager,
    TranslateService,
    AnimeJobs
  ],
  controllers: [AnimeController],
})
export class AnimeModule {}
