import { Controller, Get, Header, Param, Query, Res } from "@nestjs/common";
import axios from "axios";
import { Response } from "express";
import { DiscordService } from "src/discord/discord.service";
import { AnimeBlkomService } from "./anime-blkom.service";

@Controller("anime-blkom")
export class AnimeBlkomController {
  constructor(
    private blkomService: AnimeBlkomService,
    private discord: DiscordService,
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

  
}
