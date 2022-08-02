import { Module } from "@nestjs/common";
import { EpisodesService } from "./episodes.service";
import { EpisodesResolver } from "./episodes.resolver";
import { PrismaService } from "src/prisma/prisma.service";
import { AnimeService } from "src/anime/anime.service";

@Module({
  providers: [EpisodesResolver, EpisodesService, PrismaService, AnimeService],
})
export class EpisodesModule {}
