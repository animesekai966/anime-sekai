import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeDemographicWhereInput } from './anime-demographic-where.input';
import { Type } from 'class-transformer';
import { AnimeDemographicOrderByWithRelationInput } from './anime-demographic-order-by-with-relation.input';
import { AnimeDemographicWhereUniqueInput } from './anime-demographic-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeDemographicCountAggregateInput } from './anime-demographic-count-aggregate.input';
import { AnimeDemographicAvgAggregateInput } from './anime-demographic-avg-aggregate.input';
import { AnimeDemographicSumAggregateInput } from './anime-demographic-sum-aggregate.input';
import { AnimeDemographicMinAggregateInput } from './anime-demographic-min-aggregate.input';
import { AnimeDemographicMaxAggregateInput } from './anime-demographic-max-aggregate.input';

@ArgsType()
export class AnimeDemographicAggregateArgs {

    @Field(() => AnimeDemographicWhereInput, {nullable:true})
    @Type(() => AnimeDemographicWhereInput)
    where?: AnimeDemographicWhereInput;

    @Field(() => [AnimeDemographicOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeDemographicOrderByWithRelationInput>;

    @Field(() => AnimeDemographicWhereUniqueInput, {nullable:true})
    cursor?: AnimeDemographicWhereUniqueInput;

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
