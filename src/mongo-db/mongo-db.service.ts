import { Injectable } from '@nestjs/common';
import { MongoClient } from 'mongodb';

@Injectable()
export class MongoDBService extends MongoClient {
  constructor() {
    super(process.env.DATABASE_URL);
  }
  async onModuleInit() {
    await this.connect();
  }
  async search(query: string, limit = 50) {
    const db = this.db('animesekaiprisma');
    let collection = db.collection('Anime');
    return (
      await collection
        .aggregate([
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
        ])
        .toArray()
    ).map((res) => ({ id: res._id, score: res.score }));
  }
}
