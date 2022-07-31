import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class CharacterOnAnimeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @HideField()
    relationId!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @HideField()
    animeId!: number;

    @HideField()
    staffId!: number;

    @HideField()
    characterId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
