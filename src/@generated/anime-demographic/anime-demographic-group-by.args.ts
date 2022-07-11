import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicWhereInput } from './anime-demographic-where.input';
import { Type } from 'class-transformer';
import { AnimeDemographicOrderByWithAggregationInput } from './anime-demographic-order-by-with-aggregation.input';
import { AnimeDemographicScalarFieldEnum } from './anime-demographic-scalar-field.enum';
import { AnimeDemographicScalarWhereWithAggregatesInput } from './anime-demographic-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AnimeDemographicCountAggregateInput } from './anime-demographic-count-aggregate.input';
import { AnimeDemographicAvgAggregateInput } from './anime-demographic-avg-aggregate.input';
import { AnimeDemographicSumAggregateInput } from './anime-demographic-sum-aggregate.input';
import { AnimeDemographicMinAggregateInput } from './anime-demographic-min-aggregate.input';
import { AnimeDemographicMaxAggregateInput } from './anime-demographic-max-aggregate.input';

@ArgsType()
export class AnimeDemographicGroupByArgs {

    @Field(() => AnimeDemographicWhereInput, {nullable:true})
    @Type(() => AnimeDemographicWhereInput)
    where?: AnimeDemographicWhereInput;

    @Field(() => [AnimeDemographicOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AnimeDemographicOrderByWithAggregationInput>;

    @Field(() => [AnimeDemographicScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AnimeDemographicScalarFieldEnum>;

    @Field(() => AnimeDemographicScalarWhereWithAggregatesInput, {nullable:true})
    having?: AnimeDemographicScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnimeDemographicCountAggregateInput, {nullable:true})
    _count?: AnimeDemographicCountAggregateInput;

    @Field(() => AnimeDemographicAvgAggregateInput, {nullable:true})
    _avg?: AnimeDemographicAvgAggregateInput;

    @Field(() => AnimeDemographicSumAggregateInput, {nullable:true})
    _sum?: AnimeDemographicSumAggregateInput;

    @Field(() => AnimeDemographicMinAggregateInput, {nullable:true})
    _min?: AnimeDemographicMinAggregateInput;

    @Field(() => AnimeDemographicMaxAggregateInput, {nullable:true})
    _max?: AnimeDemographicMaxAggregateInput;
}
