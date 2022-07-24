import { Controller, Get, Query } from "@nestjs/common";
import { AnimeXService } from "./anime-x.service";

@Controller("anime-x")
export class AnimeXController {
  constructor(private animeXService: AnimeXService) {}

  @Get("/anime")
  getAnime(@Query("mal") mal?: string, @Query("slug") slug?: string) {
    return this.animeXService.getAnime({ mal, slug });
  }

  @Get("/anime-list")
  getAnimeList(@Query("page") page: number) {
    return this.animeXService.getAnimeList(page);
  }
}