import { Injectable } from "@nestjs/common";
import { AnimeOrderByWithRelationInput } from "src/@generated/anime/anime-order-by-with-relation.input";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";
import { PrismaService } from "src/prisma/prisma.service";
import { getPageInfo, PageInput } from "src/util.graphql";
import {
  AnimePage,
  CharacterOnAnimePage,
  StaffOnAnimePage,
} from "./entities/anime.entity";
import _ from "lodash";

import { StaffOnAnimeWhereInput } from "src/@generated/staff-on-anime/staff-on-anime-where.input";
import { CharacterOnAnimeWhereInput } from "src/@generated/character-on-anime/character-on-anime-where.input";
import Fuse from "fuse.js";
import { Anime } from "src/@generated/anime/anime.model";

export interface AnimeFilterInput {
  where?: AnimeWhereInput;
  orderBy?: AnimeOrderByWithRelationInput[];
  search?: string;
  pagination?: PageInput;
}

export interface AnimeFieldResolversInput {
  id?: string;
  pagination?: PageInput;
}

export interface AnimeCharactersFieldResolverInput
  extends AnimeFieldResolversInput {
  where?: CharacterOnAnimeWhereInput;
  include?: any;
}
export interface AnimeStaffFieldResolverInput extends AnimeFieldResolversInput {
  where?: StaffOnAnimeWhereInput;
}

@Injectable()
export class AnimeService {
  constructor(private prisma: PrismaService) {}

  async findFirst({ where = {}, search = "", orderBy = [] }: AnimeFilterInput) {
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
    orderBy = [],
    pagination,
  }: AnimeFilterInput): Promise<AnimePage> {
    const searchResult = search ? await this.prisma.searchAnime(search) : null;
    if (searchResult) where.id = { in: searchResult.map((res) => res.id) };

    const animeCount = await this.prisma.anime.count({ where });
    const { pageInfo, offset } = getPageInfo({ pagination, count: animeCount });

    const anime = await this.prisma.anime.findMany({
      where,
      orderBy: orderBy,
      skip: offset,
      take: pageInfo.perPage,
    });

    const fuse = new Fuse(anime, {
      keys: ["title.romaji", "title.english", "title.native", "title.synonyms"],
    });

    return {
      pageInfo,
      anime: search ? fuse.search(search).map((d) => d.item) : anime,
    };
  }

  async getAnimeCharacters({
    id,
    pagination,
    where,
    include,
  }: AnimeCharactersFieldResolverInput): Promise<CharacterOnAnimePage> {
    const whereQuery = where || {
      animeId: id,
    };

    let { pageInfo, offset } = getPageInfo({
      pagination,
      count: await this.prisma.characterOnAnime.count({ where: whereQuery }),
    });

    const characters = await this.prisma.characterOnAnime.findMany({
      where: whereQuery,
      include: include || {
        character: true,
        voiceActors: true,
      },
      skip: offset,
      take: pageInfo.perPage,
    });

    return {
      pageInfo,
      characters,
    };
  }

  async getAnimeEpisodes(id) {
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

  async getAnimeStaff({
    id,
    pagination,
    where,
  }: AnimeStaffFieldResolverInput): Promise<StaffOnAnimePage> {
    const whereQuery = where || {
      animeId: id,
    };
    const { pageInfo, offset } = getPageInfo({
      pagination,
      count: await this.prisma.staffOnAnime.count({ where: whereQuery }),
    });

    const staff = await this.prisma.staffOnAnime.findMany({
      where: whereQuery,
      include: {
        staff: true,
      },
      skip: offset,
      take: pageInfo.perPage,
    });

    return {
      pageInfo,
      staff,
    };
  }
}
