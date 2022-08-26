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
import { PageInput } from "src/util.graphql";
import { EpisodePage } from "./entities/episode.entity";
import { EpisodesService } from "./episodes.service";

@Resolver(() => Episode)
export class EpisodesResolver {
  constructor(
    private readonly episodesService: EpisodesService,
    private animeService: AnimeService,
  ) {}

  @Query(() => EpisodePage, { name: "episodes" })
  findAll(
    @Args("EpisodeWhereInput", { nullable: true })
    where?: EpisodeWhereInput,
    @Args("EpisodeOrderBy", { nullable: true })
    orderBy?: EpisodeOrderByWithRelationInput,
    @Args("pagination", { nullable: true })
    pagination?: PageInput,
  ) {
    return this.episodesService.findAll({ where, orderBy, pagination });
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
