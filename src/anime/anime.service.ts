import { Injectable } from "@nestjs/common";
import { AnimeOrderByWithRelationInput } from "src/@generated/anime/anime-order-by-with-relation.input";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";
import { CharacterOnAnimeWhereInput } from "src/@generated/character-on-anime/character-on-anime-where.input";
import { AnilistService } from "src/anilist/anilist.service";
import { AnimeBlkomService } from "src/anime-blkom/anime-blkom.service";
import { AnimeXService } from "src/anime-x/anime-x.service";
import { JikanService } from "src/jikan/jikan.service";
import { PrismaService } from "src/prisma/prisma.service";

export interface AnimeFilterInput {
  where?: AnimeWhereInput;
  orderBy?: AnimeOrderByWithRelationInput;
  search?: string;
}

@Injectable()
export class AnimeService {
  constructor(
    private jikan: JikanService,
    private blkom: AnimeBlkomService,
    private animeX: AnimeXService,
    private prisma: PrismaService,
    private anilist: AnilistService,
  ) {}

  async getAnime({ where, search, orderBy }: AnimeFilterInput) {
    return await this.prisma.anime.findFirst({
      where: where as any,
      orderBy: orderBy,
    });
  }

  async findManyAnime({ where, search, orderBy }: AnimeFilterInput) {
    return await this.prisma.anime.findMany({
      where: where as any,
      orderBy: orderBy,
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

  async getAnimeEpisodes(id: string) {
    return this.prisma.episode.findMany({
      where: {
        animeId: id,
      },
    });
  }

  async getAnimeGenres(id: string) {
    return this.prisma.genre.findMany({
      where: {
        animeIDs: {
          has: id,
        },
      },
    });
  }

  async getAnimeProducers(id: string) {
    return this.prisma.studio.findMany({
      where: {
        producedAnimeIDs: {
          has: id,
        },
      },
    });
  }

  async getAnimeStudios(id: string) {
    return this.prisma.studio.findMany({
      where: {
        animatedAnimeIDs: {
          has: id,
        },
      },
    });
  }

  async getAnimeStaff(id: string) {
    return this.prisma.staffOnAnime.findMany({
      where: {
        animeId: id,
      },
      include: {
        staff: true,
      },
    });
  }
}
