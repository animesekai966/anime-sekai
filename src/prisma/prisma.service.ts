import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async searchAnime(query: string, limit: number = 50) {
    this.$runCommandRaw({
      aggregate: 'Anime',
      pipeline: [
        {
          $search: {
            index: 'default',
            text: {
              query: query,
              path: {
                wildcard: '*',
              },
            },
          },
        },
        {
          $project: {
            score: { $meta: 'searchScore' },
          },
        },
        { $limit: limit },
      ],
    });
  }
}
