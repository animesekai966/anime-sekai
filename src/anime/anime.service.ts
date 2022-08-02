import { Injectable } from "@nestjs/common";
import { AnimeOrderByWithRelationInput } from "src/@generated/anime/anime-order-by-with-relation.input";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";
import { CharacterOnAnimeWhereInput } from "src/@generated/character-on-anime/character-on-anime-where.input";
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

  /*

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

  */

  async getAnime(
    where: AnimeWhereInput,
    orderBy: AnimeOrderByWithRelationInput,
  ) {
    return await this.prisma.anime.findFirst({
      where: where as any,
      orderBy,
    });
  }

  async getAnimeCharacters(id: string) {
    return this.prisma.characterOnAnime.findMany({
      where: {
        animeId: id,
      },
      include: {
        character: true,
        voiceActors: true,
      },
    });
  }
}
