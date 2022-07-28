import { Controller, Get, Query } from "@nestjs/common";
import { Anime } from "src/@generated/anime/anime.model";
import { AnilistService } from "src/anilist/anilist.service";
import { AnimeBlkomService } from "src/anime-blkom/anime-blkom.service";
import { AnimeXService } from "src/anime-x/anime-x.service";
import { JikanService } from "src/jikan/jikan.service";
import { PrismaService } from "src/prisma/prisma.service";

@Controller("anime")
export class AnimeController {
  constructor(
    private jikan: JikanService,
    private blkom: AnimeBlkomService,
    private animeX: AnimeXService,
    private prisma: PrismaService,
    private anilist: AnilistService,
  ) {}
  @Get("/test")
  async test(@Query("malId") id: number) {
    let anilistDetails = await this.anilist.getAnimeDetails({ malId: id });
    let malDetails = await this.jikan.anime.getFull(id);
    let characters = await this.jikan.anime.getCharacters(id);
    let altCovers =  await this.jikan.anime.getPictures(id);
    let recommendations = await this.jikan.anime.getRecommendations(id);
    let 

    let anime = await this.prisma.anime.create({
        data: {
            title: {
                english: 
            }
        }
    })
    return anime;
  }
}
