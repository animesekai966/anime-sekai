import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterCountAggregate } from './character-count-aggregate.output';
import { CharacterAvgAggregate } from './character-avg-aggregate.output';
import { CharacterSumAggregate } from './character-sum-aggregate.output';
import { CharacterMinAggregate } from './character-min-aggregate.output';
import { CharacterMaxAggregate } from './character-max-aggregate.output';

@ObjectType()
export class CharacterGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => CharacterCountAggregate, {nullable:true})
    _count?: CharacterCountAggregate;

    @Field(() => CharacterAvgAggregate, {nullable:true})
    _avg?: CharacterAvgAggregate;

    @Field(() => CharacterSumAggregate, {nullable:true})
    _sum?: CharacterSumAggregate;

    @Field(() => CharacterMinAggregate, {nullable:true})
    _min?: CharacterMinAggregate;

    @Field(() => CharacterMaxAggregate, {nullable:true})
    _max?: CharacterMaxAggregate;
}
