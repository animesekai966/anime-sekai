import { Injectable } from "@nestjs/common";
import { EpisodeOrderByWithRelationInput } from "src/@generated/episode/episode-order-by-with-relation.input";
import { EpisodeWhereInput } from "src/@generated/episode/episode-where.input";
import { PrismaService } from "src/prisma/prisma.service";

export interface EpisodeFindInput {
  where?: EpisodeWhereInput;
  orderBy?: EpisodeOrderByWithRelationInput;
}

@Injectable()
export class EpisodesService {
  constructor(private prisma: PrismaService) {}

  findAll({ where, orderBy }: EpisodeFindInput) {
    return this.prisma.episode.findMany({ where, orderBy });
  }

  findOne({ where, orderBy }: EpisodeFindInput) {
    return this.prisma.episode.findFirst({ where, orderBy });
  }
}
