import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { AnimeOrderByWithRelationInput } from "src/@generated/anime/anime-order-by-with-relation.input";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";
import { Anime } from "src/@generated/anime/anime.model";
import { CharacterOnAnime } from "src/@generated/character-on-anime/character-on-anime.model";
import { AnimeService } from "./anime.service";

@Resolver(() => Anime)
export class AnimeResolver {
  constructor(private readonly animeService: AnimeService) {}

  @Query(() => Anime, { name: "anime" })
  findOne(
    @Args("AnimeWhereInput", { nullable: true })
    animeWhereInput: AnimeWhereInput,
    @Args("AnimeOrderBy", { nullable: true })
    orderBy: AnimeOrderByWithRelationInput,
  ) {
    return this.animeService.getAnime(animeWhereInput, orderBy);
  }

  @ResolveField("characters", () => [CharacterOnAnime])
  getAnimeCharacters(@Parent() anime: Anime) {
    let { id } = anime;
    return this.animeService.getAnimeCharacters(id);
  }

}
