import { Field, InputType, Int, ObjectType } from "@nestjs/graphql";
import _ from "lodash";

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

export function getPageInfo({
  pagination,
  count,
}: {
  pagination: PageInput;
  count: number;
}) {
  pagination = _.merge(
    {
      page: 0,
      perPage: 25,
    },
    pagination,
  );

  const pageSize = pagination.perPage < 50 ? pagination.perPage : 50;
  const offset = pagination.page * pageSize;
  const lastPage = Math.floor(count / pageSize);

  return {
    pageInfo: {
      total: count,
      perPage: pageSize,
      currentPage: pagination.page,
      lastPage: lastPage,
      hasNextPage: pagination.page < lastPage,
    },
    offset,
  };
}
