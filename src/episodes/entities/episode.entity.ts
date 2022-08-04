import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Episode } from "src/@generated/episode/episode.model";
import { BasePage } from "src/util.graphql";

@ObjectType()
export class EpisodePage extends BasePage {
  @Field(() => [Episode])
  episodes: Episode[];
}
