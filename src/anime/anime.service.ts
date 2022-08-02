import { Injectable } from "@nestjs/common";
import { AnimeOrderByWithRelationInput } from "src/@generated/anime/anime-order-by-with-relation.input";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";
import { PrismaService } from "src/prisma/prisma.service";
import { PageInput } from "src/util.graphql";
import { AnimePage } from "./entities/anime.entity";
import _ from "lodash";

export interface AnimeFilterInput {
  where?: AnimeWhereInput;
  orderBy?: AnimeOrderByWithRelationInput;
  search?: string;
  pagination?: PageInput;
}

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  async findFirst({ where = {}, search = "", orderBy = {} }: AnimeFilterInput) {
    let searchResult = search && (await this.prisma.searchAnime(search, 1));
    if (searchResult) where.id = { in: searchResult.map((res) => res.id) };
    return await this.prisma.anime.findFirst({
      where,
      orderBy: orderBy,
    });
  }

  async findMany({
    where = {},
    search = "",
    orderBy = {},
    pagination,
  }: AnimeFilterInput): Promise<AnimePage> {
    pagination = _.merge(
      {
        page: 0,
        perPage: 25,
      },
      pagination,
    );
    const searchResult = search && (await this.prisma.searchAnime(search));
    if (searchResult) where.id = { in: searchResult.map((res) => res.id) };
    const pageSize = pagination.perPage < 50 ? pagination.perPage : 50;
    const animeCount = await this.prisma.anime.count({ where });
    const offset = pagination.page * pageSize;
    const lastPage = Math.floor(animeCount / pageSize);
    const anime = await this.prisma.anime.findMany({
      where,
      orderBy: orderBy,
      include: {
        _count: true,
      },
      skip: offset,
      take: pageSize,
    });

    console.log(pagination);

    return {
      pageInfo: {
        total: animeCount,
        perPage: pageSize,
        currentPage: pagination.page,
        lastPage: lastPage,
        hasNextPage: pagination.page < lastPage,
      },
      anime,
    };
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
