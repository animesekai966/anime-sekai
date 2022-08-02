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
import { StaffOnAnime } from "src/@generated/staff-on-anime/staff-on-anime.model";
import { StaffOrderByWithRelationInput } from "src/@generated/staff/staff-order-by-with-relation.input";
import { StaffWhereInput } from "src/@generated/staff/staff-where.input";
import { Staff } from "src/@generated/staff/staff.model";
import { AnimeService } from "src/anime/anime.service";
import {
  AnimeOnStaffPage,
  CharacterOnAnimePage,
  StaffOnAnimePage,
} from "src/anime/entities/anime.entity";
import { PrismaService } from "src/prisma/prisma.service";
import { getPageInfo, PageInput } from "src/util.graphql";
import { StaffPage } from "./entities/staff.entity";
import { StaffService } from "./staff.service";

@Resolver(() => Staff)
export class StaffResolver {
  constructor(
    private readonly staffService: StaffService,
    private readonly animeService: AnimeService,

    private prisma: PrismaService,
  ) {}

  @Query(() => Staff, { name: "oneStaff" })
  findOne(
    @Args("staffWhereInput", { nullable: true }) where?: StaffWhereInput,
    @Args("staffOrderBy", { nullable: true })
    orderBy?: StaffOrderByWithRelationInput,
  ) {
    return this.staffService.findOne({ where, orderBy });
  }

  @Query(() => StaffPage, { name: "staff" })
  findAll(
    @Args("staffWhereInput", { nullable: true }) where?: StaffWhereInput,
    @Args("staffOrderBy", { nullable: true })
    orderBy?: StaffOrderByWithRelationInput,
    @Args("pagination", { nullable: true })
    pagination?: PageInput,
  ): Promise<StaffPage> {
    return this.staffService.findAll({ where, orderBy, pagination });
  }

  @ResolveField("animeRoles", () => AnimeOnStaffPage)
  async getStaffAnime(
    @Parent() staff: Staff,
    @Args("pagination", { nullable: true })
    pagination?: PageInput,
  ): Promise<AnimeOnStaffPage> {
    let { id } = staff;
    const where = {
      staffId: {
        equals: id,
      },
    };

    const { pageInfo, offset } = getPageInfo({
      pagination,
      count: await this.prisma.staffOnAnime.count({ where }),
    });

    const anime = await this.prisma.staffOnAnime.findMany({
      where,
      include: {
        anime: true,
      },
      skip: offset,
      take: pageInfo.perPage,
    });

    return {
      pageInfo,
      anime,
    };
  }

  @ResolveField("characters", () => CharacterOnAnimePage)
  async getStaffCharacters(
    @Parent() staff: Staff,
    @Args("pagination", { nullable: true })
    pagination?: PageInput,
  ) {
    let { characterIDs } = staff;

    return this.animeService.getAnimeCharacters({
      where: {
        id: {
          in: characterIDs,
        },
      },
      pagination,
      include: {
        anime: true,
        character: true,
      },
    });
  }
}
