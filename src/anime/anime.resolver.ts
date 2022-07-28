import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { Anime } from "src/@generated/anime/anime.model";
import { AnimeService } from "./anime.service";

@Resolver(() => Anime)
export class AnimeResolver {
  constructor(private readonly animeService: AnimeService) {}

  @Query(() => [Anime], { name: "anime" })
  findAll() {
    return this.animeService.findAll();
  }
}
