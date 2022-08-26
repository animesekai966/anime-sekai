import { Controller, Get, Query, Res } from "@nestjs/common";
import { AnilistService } from "src/sources/anilist/anilist.service";
import { AnimeBlkomService } from "src/sources/anime-blkom/anime-blkom.service";
import { AnimeXService } from "src/sources/anime-x/anime-x.service";
import { JikanService } from "src/sources/jikan/jikan.service";
import { PrismaService } from "src/prisma/prisma.service";
import { UploadService } from "src/upload/upload.service";
import { AnimeManager } from "./anime.manager";
import axios from "axios";
import { TranslateService } from "src/translate/translate.service";
import { AnimeJobs } from "./anime.jobs";
import { Response } from "express";

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
 
  }

  @Get("/scrapeAllAnimes")
  async scrape(@Res() res: Response) {
    try {
      console.log("started");
      res.send("started eheeeee");
      await this.animeJobs.checkNewAnimeFromAnimeX();
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
