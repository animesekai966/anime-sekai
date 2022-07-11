import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimeDemographicCountAggregate } from './anime-demographic-count-aggregate.output';
import { AnimeDemographicAvgAggregate } from './anime-demographic-avg-aggregate.output';
import { AnimeDemographicSumAggregate } from './anime-demographic-sum-aggregate.output';
import { AnimeDemographicMinAggregate } from './anime-demographic-min-aggregate.output';
import { AnimeDemographicMaxAggregate } from './anime-demographic-max-aggregate.output';

@ObjectType()
export class AggregateAnimeDemographic {

    @Field(() => AnimeDemographicCountAggregate, {nullable:true})
    _count?: AnimeDemographicCountAggregate;

    @Field(() => AnimeDemographicAvgAggregate, {nullable:true})
    _avg?: AnimeDemographicAvgAggregate;

    @Field(() => AnimeDemographicSumAggregate, {nullable:true})
    _sum?: AnimeDemographicSumAggregate;

    @Field(() => AnimeDemographicMinAggregate, {nullable:true})
    _min?: AnimeDemographicMinAggregate;

    @Field(() => AnimeDemographicMaxAggregate, {nullable:true})
    _max?: AnimeDemographicMaxAggregate;
}
