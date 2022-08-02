import { Resolver, Query, Mutation, Args, Int } from "@nestjs/graphql";
import { CharacterOrderByWithRelationInput } from "src/@generated/character/character-order-by-with-relation.input";
import { CharacterWhereInput } from "src/@generated/character/character-where.input";
import { Character } from "src/@generated/character/character.model";
import { CharactersService } from "./characters.service";

@Resolver(() => Character)
export class CharactersResolver {
  constructor(private readonly charactersService: CharactersService) {}

  @Query(() => [Character], { name: "characters" })
  findAll(
    @Args("CharacterWhereInput", { nullable: true })
    where?: CharacterWhereInput,
    @Args("CharacterOrderBy", { nullable: true })
    orderBy?: CharacterOrderByWithRelationInput,
  ) {
    return this.charactersService.findAll({ where, orderBy });
  }

  @Query(() => Character, { name: "character" })
  findOne(
    @Args("CharacterWhereInput", { nullable: true })
    where?: CharacterWhereInput,
    @Args("CharacterOrderBy", { nullable: true })
    orderBy?: CharacterOrderByWithRelationInput,
  ) {
    return this.charactersService.findOne({ where, orderBy });
  }
}
