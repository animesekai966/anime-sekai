import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Anime } from "src/@generated/anime/anime.model";
import { BasePage } from "src/util.graphql";

@ObjectType()
export class RelatedAnime {
  @Field()
  relation: string;
  @Field(() => Anime)
  anime: Anime;
}

@ObjectType()
export class AnimePage extends BasePage {
  @Field(() => [Anime])
  anime: Anime[];
}

@ObjectType()
export class AnimeRelatedPage extends BasePage {
  @Field(() => [RelatedAnime])
  anime: RelatedAnime[];
}
