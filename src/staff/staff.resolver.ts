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
import { PrismaService } from "src/prisma/prisma.service";
import { StaffService } from "./staff.service";

@Resolver(() => Staff)
export class StaffResolver {
  constructor(
    private readonly staffService: StaffService,
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

  @Query(() => [Staff], { name: "staff" })
  findAll(
    @Args("staffWhereInput", { nullable: true }) where?: StaffWhereInput,
    @Args("staffOrderBy", { nullable: true })
    orderBy?: StaffOrderByWithRelationInput,
  ) {
    return this.staffService.findAll({ where, orderBy });
  }

  @ResolveField("animeRoles", () => [StaffOnAnime])
  async getStaffAnime(@Parent() staff: Staff) {
    let { id } = staff;
    let staffOnAnime = await this.prisma.staffOnAnime.findMany({
      where: {
        staffId: id,
      },
      include: {
        anime: true,
      },
    });

    return staffOnAnime;
  }

  @ResolveField("characters", () => [CharacterOnAnime])
  async getStaffCharacters(@Parent() staff: Staff) {
    let { characterIDs } = staff;
    console.log(staff);
    let characterOnAnime = await this.prisma.characterOnAnime.findMany({
      where: {
        id: {
          in: characterIDs,
        },
      },
      include: {
        anime: true,
        character: true,
      },
    });

    return characterOnAnime;
  }
}
