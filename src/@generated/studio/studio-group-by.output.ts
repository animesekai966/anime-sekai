import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StudioCountAggregate } from './studio-count-aggregate.output';
import { StudioAvgAggregate } from './studio-avg-aggregate.output';
import { StudioSumAggregate } from './studio-sum-aggregate.output';
import { StudioMinAggregate } from './studio-min-aggregate.output';
import { StudioMaxAggregate } from './studio-max-aggregate.output';

@ObjectType()
export class StudioGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [String], {nullable:true})
    animatedAnimeIDs?: Array<string>;

    @Field(() => [String], {nullable:true})
    producedAnimeIDs?: Array<string>;

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
