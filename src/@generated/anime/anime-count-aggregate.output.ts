import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    slug!: number;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:false})
    anilistId!: number;

    @Field(() => Int, {nullable:false})
    animeSlayerId!: number;

    @Field(() => Int, {nullable:false})
    xsAnimeId!: number;

    @Field(() => Int, {nullable:false})
    animeXId!: number;

    @Field(() => Int, {nullable:false})
    animeBlkomId!: number;

    @Field(() => Int, {nullable:false})
    banner!: number;

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
    source!: number;

    @Field(() => Int, {nullable:false})
    openings!: number;

    @Field(() => Int, {nullable:false})
    endings!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    producerIDs!: number;

    @Field(() => Int, {nullable:false})
    studioIDs!: number;

    @Field(() => Int, {nullable:false})
    genreIDs!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
