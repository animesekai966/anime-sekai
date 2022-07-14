import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Anime } from 'src/@generated/anime/anime.model';

@ObjectType()
export class PageInfo {
  @Field((type) => Int)
  total: number;
  @Field((type) => Int)
  perPage: number;
  @Field((type) => Int)
  lastPage: number;
  @Field()
  hasNextPage: boolean;
  @Field((type) => Int)
  currentPage: number;
}

@ObjectType()
export class AnimePage {
  @Field((type) => PageInfo)
  pageInfo: PageInfo;
  @Field((type) => [Anime])
  animes: Anime[];
}

@InputType()
export class AnimePageInput {
  @Field((type) => Int)
  perPage: number;
  @Field((type) => Int)
  page: number;
}

@InputType()
export class AnimePageTextSearchInput {
  @Field()
  query: string;
}
