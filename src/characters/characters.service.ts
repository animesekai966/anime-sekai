import { Injectable } from "@nestjs/common";
import { CharacterOrderByWithRelationInput } from "src/@generated/character/character-order-by-with-relation.input";
import { CharacterWhereInput } from "src/@generated/character/character-where.input";
import { PrismaService } from "src/prisma/prisma.service";
import { getPageInfo, PageInput } from "src/util.graphql";
import _ from "lodash";

export interface CharacterFindInput {
  where?: CharacterWhereInput;
  orderBy?: CharacterOrderByWithRelationInput;
  pagination?: PageInput;
}

@Injectable()
export class CharactersService {
  constructor(private prisma: PrismaService) {}

  async findAll({ where, orderBy, pagination }: CharacterFindInput) {
    pagination = _.merge(
      {
        page: 0,
        perPage: 25,
      },
      pagination,
    );
    const charactersCount = await this.prisma.character.count({ where });
    const { pageInfo, offset } = getPageInfo({
      pagination,
      count: charactersCount,
    });
    const characters = await this.prisma.character.findMany({
      where,
      orderBy,
      skip: offset,
      take: pageInfo.perPage,
    });

    return {
      pageInfo,
      characters,
    };
  }

  findOne({ where, orderBy }: CharacterFindInput) {
    return this.prisma.character.findFirst({ where, orderBy });
  }
}
