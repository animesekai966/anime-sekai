import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Anime } from "src/@generated/anime/anime.model";
import { CharacterOnAnime } from "src/@generated/character-on-anime/character-on-anime.model";
import { StaffOnAnime } from "src/@generated/staff-on-anime/staff-on-anime.model";
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

@ObjectType()
export class CharacterOnAnimePage extends BasePage {
  @Field(() => [CharacterOnAnime])
  characters: CharacterOnAnime[];
}

@ObjectType()
export class StaffOnAnimePage extends BasePage {
  @Field(() => [StaffOnAnime])
  staff: StaffOnAnime[];
}

@ObjectType()
export class AnimeOnStaffPage extends BasePage {
  @Field(() => [StaffOnAnime])
  anime: StaffOnAnime[];
}
