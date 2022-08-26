import { ObjectType, Field, Int } from "@nestjs/graphql";
import { Character } from "src/@generated/character/character.model";
import { BasePage } from "src/util.graphql";


@ObjectType()
export class CharacterPage extends BasePage {
  @Field(() => [Character])
  characters: Character[];
}
