import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimeOrderByWithRelationInput } from 'src/@generated/anime/anime-order-by-with-relation.input';
import { AnimeWhereUniqueInput } from 'src/@generated/anime/anime-where-unique.input';
import { AnimeWhereInput } from 'src/@generated/anime/anime-where.input';
import { Anime } from 'src/@generated/anime/anime.model';
import { AnimesService } from './animes.service';
import {
  AnimePage,
  AnimePageInput,
  AnimePageTextSearchInput,
} from './animes.types';

@Resolver(() => Anime)
export class AnimesResolver {
  constructor(private readonly animesService: AnimesService) {}
  @Query(() => Anime, { name: 'anime' })
  findOne(@Args('where') where: AnimeWhereUniqueInput) {}

  @Query(() => AnimePage, { name: 'animesPage' })
  findAll(
    @Args('where', { nullable: true }) where: AnimeWhereInput,
    @Args('orderBy', { nullable: true }) orderBy: AnimeOrderByWithRelationInput,
    @Args('pagination', { nullable: true }) pagination: AnimePageInput,
    @Args('textSearch', { nullable: true })
    textSearch: AnimePageTextSearchInput,
  ) {}
}
