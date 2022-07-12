import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { Anime } from 'src/@generated/anime/anime.model';
import { AnimesService } from './animes.service';

@Resolver(() => Anime)
export class AnimesResolver {
  constructor(private readonly animesService: AnimesService) {}

  @Query(() => [Anime], { name: 'animes' })
  findAll() {
    return "this.animesService.findAll();"
  }

  @Query(() => Anime, { name: 'anime' })
  findOne(@Args('id') id: string) {
    return "this.animesService.findOne(id);"
  }
}
