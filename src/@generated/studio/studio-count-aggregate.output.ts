import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class StudioCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @HideField()
    animatedAnimeIDs!: number;

    @HideField()
    producedAnimeIDs!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
