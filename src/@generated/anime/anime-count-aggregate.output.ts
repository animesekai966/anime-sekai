import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';

@ObjectType()
export class AnimeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:false})
    anilistId!: number;

    @HideField()
    animeXId!: number;

    @Field(() => Int, {nullable:false})
    format!: number;

    @Field(() => Int, {nullable:false})
    status!: number;

    @Field(() => Int, {nullable:false})
    season!: number;

    @Field(() => Int, {nullable:false})
    episodesCount!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => Int, {nullable:false})
    countryOfOrigin!: number;

    @Field(() => Int, {nullable:false})
    isLicensed!: number;

    @Field(() => Int, {nullable:false})
    isAdult!: number;

    @Field(() => Int, {nullable:false})
    rating!: number;

    @Field(() => Int, {nullable:false})
    source!: number;

    @Field(() => Int, {nullable:false})
    openings!: number;

    @Field(() => Int, {nullable:false})
    endings!: number;

    @Field(() => Int, {nullable:false})
    recommendations!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @HideField()
    producerIDs!: number;

    @HideField()
    studioIDs!: number;

    @HideField()
    genreIDs!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
