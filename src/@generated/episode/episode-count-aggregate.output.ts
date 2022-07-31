import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class EpisodeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    number!: number;

    @Field(() => Int, {nullable:false})
    name!: number;

    @Field(() => Int, {nullable:false})
    source!: number;

    @Field(() => Int, {nullable:false})
    filler!: number;

    @Field(() => Int, {nullable:false})
    last!: number;

    @Field(() => Int, {nullable:false})
    language!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @HideField()
    animeId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
