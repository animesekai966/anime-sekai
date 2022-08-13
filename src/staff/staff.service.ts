import { Injectable } from "@nestjs/common";
import { StaffOrderByWithRelationInput } from "src/@generated/staff/staff-order-by-with-relation.input";
import { StaffWhereInput } from "src/@generated/staff/staff-where.input";
import { PrismaService } from "src/prisma/prisma.service";
import { getPageInfo, PageInput } from "src/util.graphql";

export interface StaffFindInput {
  where?: StaffWhereInput;
  orderBy?: StaffOrderByWithRelationInput;
  pagination?: PageInput;
}

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  async findAll({ where, orderBy, pagination }: StaffFindInput) {
    const staffCount = await this.prisma.staff.count({ where });
    const { pageInfo, offset } = getPageInfo({ pagination, count: staffCount });
    const staff = await this.prisma.staff.findMany({
      where,
      orderBy,
      skip: offset,
      take: pageInfo.perPage,
    });
    return {
      pageInfo,
      staff,
    };
  }

  findOne({ where, orderBy }: StaffFindInput) {
    return this.prisma.staff.findFirst({
      where,
      orderBy,
    });
  }
}
