import { Controller, Get, Header, Param, Query, Res } from "@nestjs/common";
import axios from "axios";
import { Response } from "express";
import { DiscordService } from "src/sources/discord/discord.service";
import { AnimeBlkomService } from "./anime-blkom.service";

@Controller("anime-blkom")
export class AnimeBlkomController {
  constructor(
    private blkomService: AnimeBlkomService,
  ) {}

  @Get("/anime")
  getAnime(@Query("slug") slug: string, @Query("episodes") episodes: boolean) {
    return this.blkomService.getAnime(slug, episodes);
  }

  @Get("get-latest")
  getLatest(@Query("page") page: number = 0) {
    return this.blkomService.getLatest(page);
  }

  @Get("anime-list")
  getAnimeList(@Query("page") page: number = 0) {
    return this.blkomService.getAnimeList(page);
  }

  @Get("ep-raw")
  getEpRaw(@Query("url") url: string) {
    return this.blkomService.getAnimeEpServersRawVideoUrl(url);
  }

  @Get("/stream")
  async getStream(
    @Query("src") src: string,
    @Query("embed") embed: string,
    @Res() res: Response,
  ) {
    let response = await axios({
      url: src,
      headers: {
        referer: embed,
      },
      responseType: "stream",
    });

    console.log(response);

    res.set({
      "Content-Type": "video/mp4",
      "Accept-Ranges": "bytes",
    });

    response.data.pipe(res);
  }
}
