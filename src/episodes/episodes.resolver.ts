import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { Anime } from "src/@generated/anime/anime.model";
import { EpisodeOrderByWithRelationInput } from "src/@generated/episode/episode-order-by-with-relation.input";
import { EpisodeWhereInput } from "src/@generated/episode/episode-where.input";
import { Episode } from "src/@generated/episode/episode.model";
import { AnimeService } from "src/anime/anime.service";
import { EpisodesService } from "./episodes.service";

@Resolver(() => Episode)
export class EpisodesResolver {
  constructor(
    private readonly episodesService: EpisodesService,
    private animeService: AnimeService,
  ) {}

  @Query(() => [Episode], { name: "episodes" })
  findAll(
    @Args("EpisodeWhereInput", { nullable: true })
    where?: EpisodeWhereInput,
    @Args("EpisodeOrderBy", { nullable: true })
    orderBy?: EpisodeOrderByWithRelationInput,
  ) {
    return this.episodesService.findAll({ where, orderBy });
  }

  @Query(() => Episode, { name: "episode" })
  findOne(
    @Args("EpisodeWhereInput", { nullable: true })
    where?: EpisodeWhereInput,
    @Args("EpisodeOrderBy", { nullable: true })
    orderBy?: EpisodeOrderByWithRelationInput,
  ) {
    return this.episodesService.findOne({ where, orderBy });
  }

  @ResolveField("anime", () => Anime)
  getEpisodeAnime(@Parent() episode: Episode) {
    let { animeId } = episode;
    return this.animeService.findFirst({
      where: {
        id: {
          equals: animeId,
        },
      },
    });
  }
}
