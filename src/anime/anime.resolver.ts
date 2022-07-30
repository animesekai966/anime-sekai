import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { AnimeWhereInput } from "src/@generated/anime/anime-where.input";
import { Anime } from "src/@generated/anime/anime.model";
import { AnimeService } from "./anime.service";

@Resolver(() => Anime)
export class AnimeResolver {
  constructor(private readonly animeService: AnimeService) {}

  @Query(() => Anime, { name: "anime" })
  findOne(@Args("AnimeWhereInput") animeWhereInput: AnimeWhereInput) {
    return this.animeService.find(animeWhereInput);
  }
}
