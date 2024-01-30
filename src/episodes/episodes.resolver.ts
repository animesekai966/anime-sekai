import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EpisodesService } from './episodes.service';
import { Episode } from './entities/episode.entity';
import { CreateEpisodeInput } from './dto/create-episode.input';
import { UpdateEpisodeInput } from './dto/update-episode.input';

@Resolver(() => Episode)
export class EpisodesResolver {
  constructor(private readonly episodesService: EpisodesService) {}

  @Mutation(() => Episode)
  createEpisode(@Args('createEpisodeInput') createEpisodeInput: CreateEpisodeInput) {
    return this.episodesService.create(createEpisodeInput);
  }

  @Query(() => [Episode], { name: 'episodes' })
  findAll() {
    return this.episodesService.findAll();
  }

  @Query(() => Episode, { name: 'episode' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.episodesService.findOne(id);
  }

  @Mutation(() => Episode)
  updateEpisode(@Args('updateEpisodeInput') updateEpisodeInput: UpdateEpisodeInput) {
    return this.episodesService.update(updateEpisodeInput.id, updateEpisodeInput);
  }

  @Mutation(() => Episode)
  removeEpisode(@Args('id', { type: () => Int }) id: number) {
    return this.episodesService.remove(id);
  }
}
