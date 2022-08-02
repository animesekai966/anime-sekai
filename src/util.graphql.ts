import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";

@InputType({})
export class PageInput {
  @Field(() => Int, { nullable: true })
  page?: number;
  @Field(() => Int, { nullable: true })
  perPage?: number;
}

@ObjectType({})
export class PageInfo {
  @Field(() => Int)
  total: number;
  @Field(() => Int)
  perPage: number;
  @Field(() => Int)
  currentPage: number;
  @Field(() => Int)
  lastPage: number;
  @Field()
  hasNextPage: boolean;
}

@ObjectType({})
export class BasePage {
  @Field(() => PageInfo)
  pageInfo: PageInfo;
}
