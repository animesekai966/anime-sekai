import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StudioCountAggregate } from './studio-count-aggregate.output';
import { StudioAvgAggregate } from './studio-avg-aggregate.output';
import { StudioSumAggregate } from './studio-sum-aggregate.output';
import { StudioMinAggregate } from './studio-min-aggregate.output';
import { StudioMaxAggregate } from './studio-max-aggregate.output';

@ObjectType()
export class AggregateStudio {

    @Field(() => StudioCountAggregate, {nullable:true})
    _count?: StudioCountAggregate;

    @Field(() => StudioAvgAggregate, {nullable:true})
    _avg?: StudioAvgAggregate;

    @Field(() => StudioSumAggregate, {nullable:true})
    _sum?: StudioSumAggregate;

    @Field(() => StudioMinAggregate, {nullable:true})
    _min?: StudioMinAggregate;

    @Field(() => StudioMaxAggregate, {nullable:true})
    _max?: StudioMaxAggregate;
}
