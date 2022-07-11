import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeWhereInput } from './anime-where.input';
import { Type } from 'class-transformer';
import { AnimeOrderByWithAggregationInput } from './anime-order-by-with-aggregation.input';
import { AnimeScalarFieldEnum } from './anime-scalar-field.enum';
import { AnimeScalarWhereWithAggregatesInput } from './anime-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AnimeCountAggregateInput } from './anime-count-aggregate.input';
import { AnimeAvgAggregateInput } from './anime-avg-aggregate.input';
import { AnimeSumAggregateInput } from './anime-sum-aggregate.input';
import { AnimeMinAggregateInput } from './anime-min-aggregate.input';
import { AnimeMaxAggregateInput } from './anime-max-aggregate.input';

@ArgsType()
export class AnimeGroupByArgs {

    @Field(() => AnimeWhereInput, {nullable:true})
    @Type(() => AnimeWhereInput)
    where?: AnimeWhereInput;

    @Field(() => [AnimeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AnimeOrderByWithAggregationInput>;

    @Field(() => [AnimeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AnimeScalarFieldEnum>;

    @Field(() => AnimeScalarWhereWithAggregatesInput, {nullable:true})
    having?: AnimeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnimeCountAggregateInput, {nullable:true})
    _count?: AnimeCountAggregateInput;

    @Field(() => AnimeAvgAggregateInput, {nullable:true})
    _avg?: AnimeAvgAggregateInput;

    @Field(() => AnimeSumAggregateInput, {nullable:true})
    _sum?: AnimeSumAggregateInput;

    @Field(() => AnimeMinAggregateInput, {nullable:true})
    _min?: AnimeMinAggregateInput;

    @Field(() => AnimeMaxAggregateInput, {nullable:true})
    _max?: AnimeMaxAggregateInput;
}
