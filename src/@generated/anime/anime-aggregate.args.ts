import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeWhereInput } from './anime-where.input';
import { Type } from 'class-transformer';
import { AnimeOrderByWithRelationInput } from './anime-order-by-with-relation.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeCountAggregateInput } from './anime-count-aggregate.input';
import { AnimeMinAggregateInput } from './anime-min-aggregate.input';
import { AnimeMaxAggregateInput } from './anime-max-aggregate.input';

@ArgsType()
export class AnimeAggregateArgs {

    @Field(() => AnimeWhereInput, {nullable:true})
    @Type(() => AnimeWhereInput)
    where?: AnimeWhereInput;

    @Field(() => [AnimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeOrderByWithRelationInput>;

    @Field(() => AnimeWhereUniqueInput, {nullable:true})
    cursor?: AnimeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnimeCountAggregateInput, {nullable:true})
    _count?: AnimeCountAggregateInput;

    @Field(() => AnimeMinAggregateInput, {nullable:true})
    _min?: AnimeMinAggregateInput;

    @Field(() => AnimeMaxAggregateInput, {nullable:true})
    _max?: AnimeMaxAggregateInput;
}
