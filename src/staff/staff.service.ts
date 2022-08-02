import { Injectable } from "@nestjs/common";
import { StaffOrderByWithRelationInput } from "src/@generated/staff/staff-order-by-with-relation.input";
import { StaffWhereInput } from "src/@generated/staff/staff-where.input";
import { PrismaService } from "src/prisma/prisma.service";

export interface StaffFindInput {
  where?: StaffWhereInput;
  orderBy?: StaffOrderByWithRelationInput;
}

@Injectable()
export class StaffService {
  constructor(private prisma: PrismaService) {}

  findAll({ where, orderBy }: StaffFindInput) {
    return this.prisma.staff.findMany({
      where,
      orderBy,
      include: {
        _count: true,
      },
    });
  }

  findOne({ where, orderBy }: StaffFindInput) {
    return this.prisma.staff.findFirst({
      where,
      orderBy,
      include: {
        _count: true,
      },
    });
  }
}
