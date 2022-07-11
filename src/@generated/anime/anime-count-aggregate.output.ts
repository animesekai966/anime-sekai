import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:false})
    anilistId!: number;

    @Field(() => Int, {nullable:false})
    animeXId!: number;

    @Field(() => Int, {nullable:false})
    banner!: number;

    @Field(() => Int, {nullable:false})
    type!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    ageRating!: number;

    @Field(() => Int, {nullable:false})
    season!: number;

    @Field(() => Int, {nullable:false})
    openings!: number;

    @Field(() => Int, {nullable:false})
    endings!: number;

    @Field(() => Int, {nullable:false})
    genreIDs!: number;

    @Field(() => Int, {nullable:false})
    themesIDs!: number;

    @Field(() => Int, {nullable:false})
    demographicIDs!: number;

    @Field(() => Int, {nullable:false})
    studioIDs!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
