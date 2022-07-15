import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ScheduleModule } from '@nestjs/schedule';
import { AnimesModule } from './animes/animes.module';
import { PrismaService } from './prisma/prisma.service';
import { JikanService } from './jikan.service';
import { MongoDBService } from './mongo-db/mongo-db.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: false,
      autoSchemaFile: true,
    }),
    AnimesModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService, , PrismaService, JikanService, MongoDBService],
  exports: [JikanService],
})
export class AppModule {}
