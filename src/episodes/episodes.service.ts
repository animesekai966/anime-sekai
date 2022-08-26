import { Injectable } from "@nestjs/common";
import { EpisodeOrderByWithRelationInput } from "src/@generated/episode/episode-order-by-with-relation.input";
import { EpisodeWhereInput } from "src/@generated/episode/episode-where.input";
import { PrismaService } from "src/prisma/prisma.service";
import { getPageInfo, PageInput } from "src/util.graphql";
import { EpisodePage } from "./entities/episode.entity";

export interface EpisodeFindInput {
  where?: EpisodeWhereInput;
  orderBy?: EpisodeOrderByWithRelationInput;
  pagination?: PageInput;
}

@Injectable()
export class EpisodesService {
  constructor(private prisma: PrismaService) {}

  async findAll({
    where,
    orderBy,
    pagination,
  }: EpisodeFindInput): Promise<EpisodePage> {
    const { pageInfo, offset } = getPageInfo({
      pagination,
      count: await this.prisma.episode.count({ where }),
    });
    const episodes = await this.prisma.episode.findMany({
      where,
      orderBy,
      skip: offset,
      take: pageInfo.perPage,
    });
    return {
      pageInfo,
      episodes,
    };
  }

  findOne({ where, orderBy }: EpisodeFindInput) {
    return this.prisma.episode.findFirst({ where, orderBy });
  }
}
