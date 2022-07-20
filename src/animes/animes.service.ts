import { Injectable } from '@nestjs/common';
import { AnimeOrderByWithRelationInput } from 'src/@generated/anime/anime-order-by-with-relation.input';
import { AnimeWhereUniqueInput } from 'src/@generated/anime/anime-where-unique.input';
import { AnimeWhereInput } from 'src/@generated/anime/anime-where.input';
import { PrismaService } from 'src/prisma/prisma.service';
import {
  AnimePage,
  AnimePageInput,
  AnimePageTextSearchInput,
} from './animes.types';
const TEXT_SEARCH_LIMIT = 50;

@Injectable()
export class AnimesService {
  constructor(private prisma: PrismaService) {}
}
