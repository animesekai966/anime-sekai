import { Module } from "@nestjs/common";
import { StaffService } from "./staff.service";
import { StaffResolver } from "./staff.resolver";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  providers: [StaffResolver, StaffService, PrismaService],
})
export class StaffModule {}
