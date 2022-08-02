import { Module } from "@nestjs/common";
import { StaffService } from "./staff.service";
import { StaffResolver } from "./staff.resolver";
import { PrismaService } from "src/prisma/prisma.service";
import { AnimeService } from "src/anime/anime.service";

@Module({
  providers: [StaffResolver, StaffService, PrismaService, AnimeService],
})
export class StaffModule {}
