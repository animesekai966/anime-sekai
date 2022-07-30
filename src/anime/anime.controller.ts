import { Controller, Get, Query } from "@nestjs/common";
import { AnilistService } from "src/anilist/anilist.service";
import { AnimeBlkomService } from "src/anime-blkom/anime-blkom.service";
import { AnimeXService } from "src/anime-x/anime-x.service";
import { JikanService } from "src/jikan/jikan.service";
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
  async test(@Query("slug") blkomSlug: string, @Query("text") text: string) {
    //return await this.manager.addAnimeBlkomEpisodes("high-school-dxd");

    return await this.blkom.getAnime(blkomSlug, true)
  }

  @Get("/scrapeAllAnimes")
  async scrape() {
    try {
      return await this.animeJobs.checkNewAnimeFromBlkom();
    } catch (err) {
      console.log(err);
      return "err";
    }
  }
}

async function translate(text: string) {
  if (!text) return "";
  try {
    let { data } = await axios({
      method: "post",
      url: "https://web-api.itranslateapp.com/v3/texts/translate",
      headers: {
        accept: "application/json",
        "api-key": "d2aefeac9dc661bc98eebd6cc12f0b82",
        "content-type": "application/json",
      },
      data: {
        source: {
          dialect: "en",
          text: text,
        },
        target: {
          dialect: "ar",
        },
      },
    });

    return data.target.text;
  } catch (err) {
    console.log(`[TRANSLATE] err `, err);
    return await translate(text);
  }
}
