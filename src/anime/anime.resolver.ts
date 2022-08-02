import { NotFoundException } from "@nestjs/common";
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { AnimeOrderByRelationAggregateInput } from "src/@generated/anime/anime-order-by-relation-aggregate.input";
import { AnimeOrderByWithRelationInput } from "src/@generated/anime/anime-order-by-with-relation.input";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";
import { Anime } from "src/@generated/anime/anime.model";
import { CharacterOnAnime } from "src/@generated/character-on-anime/character-on-anime.model";
import { Character } from "src/@generated/character/character.model";
import { Episode } from "src/@generated/episode/episode.model";
import { Genre } from "src/@generated/genre/genre.model";
import { StaffOnAnime } from "src/@generated/staff-on-anime/staff-on-anime.model";
import { Studio } from "src/@generated/studio/studio.model";
import { PrismaService } from "src/prisma/prisma.service";
import { PageInput } from "src/util.graphql";
import { AnimeService } from "./anime.service";
import {
  AnimePage,
  AnimeRelatedPage,
  RelatedAnime,
} from "./entities/anime.entity";

@Resolver(() => Anime)
export class AnimeResolver {
  constructor(
    private readonly animeService: AnimeService,
    private readonly prisma: PrismaService,
  ) {}

  @Query(() => Anime, { name: "anime" })
  async findOne(
    @Args("AnimeWhereInput", { nullable: true })
    animeWhereInput: AnimeWhereInput,
    @Args("AnimeOrderBy", { nullable: true })
    orderBy: AnimeOrderByWithRelationInput,
    @Args("search", { nullable: true })
    search: string,
  ) {
    const anime = await this.animeService.findFirst({
      where: animeWhereInput,
      orderBy: orderBy,
      search,
    });
    if (!anime) throw new NotFoundException("Anime Not Found");
    return anime;
  }

  @Query(() => AnimePage, { name: "animeList" })
  async findAll(
    @Args("AnimeWhereInput", { nullable: true })
    animeWhereInput: AnimeWhereInput,
    @Args("AnimeOrderBy", { nullable: true })
    orderBy: AnimeOrderByWithRelationInput,
    @Args("search", { nullable: true })
    search: string,
    @Args("pagination", { nullable: true })
    pagination: PageInput,
  ): Promise<AnimePage> {
    const animePaginated = await this.animeService.findMany({
      where: animeWhereInput,
      orderBy: orderBy,
      search,
      pagination,
    });

    return animePaginated;
  }

  @ResolveField("characters", () => [CharacterOnAnime])
  getAnimeCharacters(@Parent() anime: Anime) {
    let { id } = anime;
    return this.animeService.getAnimeCharacters(id);
  }

  @ResolveField("staff", () => [StaffOnAnime])
  getAnimeStaff(@Parent() anime: Anime) {
    let { id } = anime;
    return this.animeService.getAnimeStaff(id);
  }

  @ResolveField("episodes", () => [Episode])
  getAnimeEpisodes(@Parent() anime: Anime) {
    let { id } = anime;
    return this.animeService.getAnimeEpisodes(id);
  }

  @ResolveField("genres", () => [Genre])
  getAnimeGenres(@Parent() anime: Anime) {
    let { id } = anime;
    return this.animeService.getAnimeGenres(id);
  }

  @ResolveField("producers", () => [Studio])
  getAnimeProducers(@Parent() anime: Anime) {
    let { id } = anime;
    return this.animeService.getAnimeProducers(id);
  }

  @ResolveField("studios", () => [Studio])
  getAnimeStudios(@Parent() anime: Anime) {
    let { id } = anime;
    return this.animeService.getAnimeStudios(id);
  }

  @ResolveField("related", () => AnimeRelatedPage)
  async getAnimeRelated(
    @Parent() anime: Anime,
    @Args("pagination", { nullable: true })
    pagination: PageInput,
  ): Promise<AnimeRelatedPage> {
    let { related } = anime;
    let result = await this.animeService.findMany({
      where: {
        malId: {
          in: related.map((anime) => anime.malId),
        },
      },
      pagination,
    });

    /**/

    return {
      pageInfo: result.pageInfo,
      anime: result.anime.map((anime) => ({
        relation: related.find((ani) => ani.malId == anime.malId).type,
        anime,
      })),
    };
  }
}
