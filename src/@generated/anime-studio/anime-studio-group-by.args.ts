import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioWhereInput } from './anime-studio-where.input';
import { Type } from 'class-transformer';
import { AnimeStudioOrderByWithAggregationInput } from './anime-studio-order-by-with-aggregation.input';
import { AnimeStudioScalarFieldEnum } from './anime-studio-scalar-field.enum';
import { AnimeStudioScalarWhereWithAggregatesInput } from './anime-studio-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AnimeStudioCountAggregateInput } from './anime-studio-count-aggregate.input';
import { AnimeStudioAvgAggregateInput } from './anime-studio-avg-aggregate.input';
import { AnimeStudioSumAggregateInput } from './anime-studio-sum-aggregate.input';
import { AnimeStudioMinAggregateInput } from './anime-studio-min-aggregate.input';
import { AnimeStudioMaxAggregateInput } from './anime-studio-max-aggregate.input';

@ArgsType()
export class AnimeStudioGroupByArgs {

    @Field(() => AnimeStudioWhereInput, {nullable:true})
    @Type(() => AnimeStudioWhereInput)
    where?: AnimeStudioWhereInput;

    @Field(() => [AnimeStudioOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AnimeStudioOrderByWithAggregationInput>;

    @Field(() => [AnimeStudioScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AnimeStudioScalarFieldEnum>;

    @Field(() => AnimeStudioScalarWhereWithAggregatesInput, {nullable:true})
    having?: AnimeStudioScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnimeStudioCountAggregateInput, {nullable:true})
    _count?: AnimeStudioCountAggregateInput;

    @Field(() => AnimeStudioAvgAggregateInput, {nullable:true})
    _avg?: AnimeStudioAvgAggregateInput;

    @Field(() => AnimeStudioSumAggregateInput, {nullable:true})
    _sum?: AnimeStudioSumAggregateInput;

    @Field(() => AnimeStudioMinAggregateInput, {nullable:true})
    _min?: AnimeStudioMinAggregateInput;

    @Field(() => AnimeStudioMaxAggregateInput, {nullable:true})
    _max?: AnimeStudioMaxAggregateInput;
}
