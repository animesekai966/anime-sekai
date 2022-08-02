import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from "@nestjs/graphql";
import { CharacterOnAnime } from "src/@generated/character-on-anime/character-on-anime.model";
import { CharacterOrderByWithRelationInput } from "src/@generated/character/character-order-by-with-relation.input";
import { CharacterWhereInput } from "src/@generated/character/character-where.input";
import { Character } from "src/@generated/character/character.model";
import { PrismaService } from "src/prisma/prisma.service";
import { CharactersService } from "./characters.service";

@Resolver(() => Character)
export class CharactersResolver {
  constructor(
    private readonly charactersService: CharactersService,
    private prisma: PrismaService,
  ) {}

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

  @ResolveField("anime", () => [CharacterOnAnime])
  async getCharacterAnime(@Parent() character: Character) {
    let { id } = character;
    let CharacterOnAnime = await this.prisma.characterOnAnime.findMany({
      where: {
        characterId: id,
      },
      include: {
        anime: true,
        voiceActors: true,
        _count: true,
      },
    });

    return CharacterOnAnime;
  }
}
