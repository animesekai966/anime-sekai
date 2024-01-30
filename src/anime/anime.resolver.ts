import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AnimeService } from './anime.service';
import { Anime } from './entities/anime.entity';
import { CreateAnimeInput } from './dto/create-anime.input';
import { UpdateAnimeInput } from './dto/update-anime.input';

@Resolver(() => Anime)
export class AnimeResolver {
  constructor(private readonly animeService: AnimeService) {}

  @Mutation(() => Anime)
  createAnime(@Args('createAnimeInput') createAnimeInput: CreateAnimeInput) {
    return this.animeService.create(createAnimeInput);
  }

  @Query(() => [Anime], { name: 'anime' })
  findAll() {
    return this.animeService.findAll();
  }

  @Query(() => Anime, { name: 'anime' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.animeService.findOne(id);
  }

  @Mutation(() => Anime)
  updateAnime(@Args('updateAnimeInput') updateAnimeInput: UpdateAnimeInput) {
    return this.animeService.update(updateAnimeInput.id, updateAnimeInput);
  }

  @Mutation(() => Anime)
  removeAnime(@Args('id', { type: () => Int }) id: number) {
    return this.animeService.remove(id);
  }
}
