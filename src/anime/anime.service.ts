import { Injectable } from "@nestjs/common";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";
import { AnilistService } from "src/anilist/anilist.service";
import { AnimeBlkomService } from "src/anime-blkom/anime-blkom.service";
import { AnimeXService } from "src/anime-x/anime-x.service";
import { JikanService } from "src/jikan/jikan.service";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AnimeService {
  constructor(
    private jikan: JikanService,
    private blkom: AnimeBlkomService,
    private animeX: AnimeXService,
    private prisma: PrismaService,
    private anilist: AnilistService,
  ) {}

  async find(where: AnimeWhereInput) {
    return await this.prisma.anime.findFirst({
      where,
      include: {
        characters: {
          include: {
            character: true,
            voiceActors: true,
          },
        },
        episodes: true,
        genres: true,
        producers: true,
        staff: {
          include: {
            staff: true,
          },
        },
        studios: true,
      },
    });
  }
}
