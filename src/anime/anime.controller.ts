import { Controller, Get, Query } from "@nestjs/common";
import { AnilistService } from "src/anilist/anilist.service";
import { AnimeBlkomService } from "src/sources/anime-blkom/anime-blkom.service";
import { AnimeXService } from "src/sources/anime-x/anime-x.service";
import { JikanService } from "src/sources/jikan/jikan.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UploadService } from "src/upload/upload.service";
import { AnimeManager } from "./anime.manager";
import axios from "axios";
import { TranslateService } from "src/translate/translate.service";
import { AnimeJobs } from "./anime.jobs";

@Controller("anime")
export class AnimeController {
  constructor(
    private jikan: JikanService,
    private blkom: AnimeBlkomService,
    private animeX: AnimeXService,
    private prisma: PrismaService,
    private anilist: AnilistService,
    private uploads: UploadService,
    private manager: AnimeManager,
    private translator: TranslateService,
    private animeJobs: AnimeJobs,
  ) {}
  @Get("/test")
  async test(@Query("slug") slug: string, @Query("text") text: string) {
    //return await this.manager.addAnimeBlkomEpisodes("high-school-dxd");

    return await this.manager.createAnime({ animeXSlug: slug });
  }

  @Get("/scrapeAllAnimes")
  async scrape() {
    try {
      console.log("started");
      return await this.animeJobs.checkNewAnimeFromAnimeX();
    } catch (err) {
      console.log(err);
      return "err";
    }
  }

  @Get("/getAnime")
  async getAnime() {
    try {
      return await this.manager.getAnimeInfo(
        {
          malId: 51837,
        },
        {},
      );
    } catch (err) {
      console.log(err);
      return "err";
    }
  }

  @Get("/testNewEps")
  async testNewEps() {
    try {
      return await this.animeJobs.checkNewAnimeFromAnimeX();
    } catch (err) {
      console.log(err);
      return "err";
    }
  }
}
