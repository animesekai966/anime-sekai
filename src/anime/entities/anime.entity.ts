import { Field, ObjectType } from "@nestjs/graphql";
import { Anime } from "src/@generated/anime/anime.model";

@ObjectType({})
export class RelatedAnime {
  @Field()
  relation: string;
  @Field(() => Anime)
  anime: Anime;
}


