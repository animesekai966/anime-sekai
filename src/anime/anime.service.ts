import { Injectable } from "@nestjs/common";
import { AnimeOrderByWithRelationInput } from "src/@generated/anime/anime-order-by-with-relation.input";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";

import { PrismaService } from "src/prisma/prisma.service";

export interface AnimeFilterInput {
  where?: AnimeWhereInput;
  orderBy?: AnimeOrderByWithRelationInput;
  search?: string;
  limit?: number;
}

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  async getAnime({ where = {}, search = "", orderBy = {} }: AnimeFilterInput) {
    let searchResult = search && (await this.prisma.searchAnime(search, 1));
    if (searchResult) where.id = { in: searchResult.map((res) => res.id) };
    return await this.prisma.anime.findFirst({
      where,
      orderBy: orderBy,
    });
  }

  async findManyAnime({
    where = {},
    search = "",
    orderBy = {},
    limit = 5,
  }: AnimeFilterInput) {
    let searchResult = search && (await this.prisma.searchAnime(search, limit));
    if (searchResult) where.id = { in: searchResult.map((res) => res.id) };
    return await this.prisma.anime.findMany({
      where,
      orderBy: orderBy,
      include: {
        _count: true,
      },
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
        _count: true,
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
