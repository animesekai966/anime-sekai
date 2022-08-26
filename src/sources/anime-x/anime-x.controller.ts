import { Controller, Get, Query } from "@nestjs/common";
import { AnilistService } from "src/sources/anilist/anilist.service";
import { AnimeXService } from "./anime-x.service";

@Controller("anime-x")
export class AnimeXController {
  constructor(
    private animeXService: AnimeXService,
    private anilist: AnilistService,
  ) {}

  @Get("/anime")
  getAnime(@Query("mal") mal?: string, @Query("slug") slug?: string) {
    return this.animeXService.getAnime({ mal, slug });
  }

  @Get("/anime-list")
  getAnimeList(@Query("page") page: number) {
    return this.animeXService.getAnimeList(page);
  }

  @Get("/anilist")
  async getAnilistData(@Query("id") id: number, @Query("idMal") idMal: number) {
    return await this.anilist.getAnimeDetails({ anilistId: id, malId: idMal });
  }
}
