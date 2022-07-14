import { Injectable } from '@nestjs/common';
import { AnimeOrderByWithRelationInput } from 'src/@generated/anime/anime-order-by-with-relation.input';
import { AnimeWhereUniqueInput } from 'src/@generated/anime/anime-where-unique.input';
import { AnimeWhereInput } from 'src/@generated/anime/anime-where.input';
import { MongoDBService } from 'src/mongo-db/mongo-db.service';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  AnimePage,
  AnimePageInput,
  AnimePageTextSearchInput,
} from './animes.types';
const TEXT_SEARCH_LIMIT = 50;

@Injectable()
export class AnimesService {
  constructor(private prisma: PrismaService, private mongoDB: MongoDBService) {}

  findOne(where: AnimeWhereUniqueInput) {
    return this.prisma.anime.findFirst({
      where,
      include: {
        genres: true,
        producers: true,
        studios: true,
      },
    });
  }

  async createAnimePage(
    where: AnimeWhereInput,
    orderBy: AnimeOrderByWithRelationInput,
    pagination: AnimePageInput = { perPage: 20, page: 1 },
    textSearch: AnimePageTextSearchInput = { query: '' },
  ): Promise<AnimePage> {
    if (pagination.perPage > 25) pagination.perPage = 25;
    let animesCount = textSearch.query
      ? TEXT_SEARCH_LIMIT
      : await this.prisma.anime.count();
    let lastPage = Math.floor(animesCount / pagination.perPage);
    let offset =
      pagination.page === 1 ? 0 : pagination.page * pagination.perPage;

    let textSearchResults: { id: string; score: number }[];
    if (textSearch.query) {
      textSearchResults = await this.mongoDB.search(
        textSearch.query,
        TEXT_SEARCH_LIMIT,
      );
      where = {
        ...where,
        id: {
          in: textSearchResults
            .map((x) => x.id)
            .slice(offset, offset + pagination.perPage),
        },
      };
    }
    let animes = await this.find(where, orderBy, {
      skip: offset,
      take: pagination.perPage,
    });

    return {
      pageInfo: {
        total: animesCount,
        currentPage: pagination.page,
        hasNextPage: pagination.page < lastPage,
        lastPage: lastPage,
        perPage: pagination.perPage,
      },
      animes: (Object.keys(orderBy || {}).length > 0
        ? animes
        : animes
            .map((anime) => ({
              ...anime,
              score: textSearchResults.find((res) => res.id == anime.id).score,
            }))
            .sort((a, b) => b.score - a.score)) as any,
    };
  }

  find(
    where: AnimeWhereInput,
    orderBy: AnimeOrderByWithRelationInput,
    { skip, take }: { skip: number; take: number },
  ) {
    return this.prisma.anime.findMany({
      orderBy,
      where,
      skip,
      take,
      include: {
        genres: true,
        producers: true,
        studios: true,
      },
    });
  }
}
