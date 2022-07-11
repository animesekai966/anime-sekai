import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimesService } from './animes.service';
import { Anime } from './animes.types';

@Resolver(() => Anime)
export class AnimesResolver {
  constructor(private readonly animesService: AnimesService) {}

  @Query(() => [Anime], { name: 'animes' })
  findAll() {
    return this.animesService.findAll();
  }

  @Query(() => Anime, { name: 'anime' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.animesService.findOne(id);
  }
}
