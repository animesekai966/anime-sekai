import { Injectable } from "@nestjs/common";
import { CharacterOrderByWithRelationInput } from "src/@generated/character/character-order-by-with-relation.input";
import { CharacterWhereInput } from "src/@generated/character/character-where.input";
import { PrismaService } from "src/prisma/prisma.service";

export interface CharacterFindInput {
  where?: CharacterWhereInput;
  orderBy?: CharacterOrderByWithRelationInput;
}

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  findAll({ where, orderBy }: CharacterFindInput) {
    return this.prisma.character.findMany({ where, orderBy });
  }

  findOne({ where, orderBy }: CharacterFindInput) {
    return this.prisma.character.findFirst({ where, orderBy });
  }
}
