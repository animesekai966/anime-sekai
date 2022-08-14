import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AnimeFormat } from '../prisma/anime-format.enum';
import { AnimeStatus } from '../prisma/anime-status.enum';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { Float } from '@nestjs/graphql';
import { AgeRating } from '../prisma/age-rating.enum';
import { AnimeSource } from '../prisma/anime-source.enum';
import { AnimeCountAggregate } from './anime-count-aggregate.output';
import { AnimeAvgAggregate } from './anime-avg-aggregate.output';
import { AnimeSumAggregate } from './anime-sum-aggregate.output';
import { AnimeMinAggregate } from './anime-min-aggregate.output';
import { AnimeMaxAggregate } from './anime-max-aggregate.output';

@ObjectType()
export class AnimeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @HideField()
    animeXId?: string;

    @Field(() => AnimeFormat, {nullable:false})
    format!: keyof typeof AnimeFormat;

    @Field(() => AnimeStatus, {nullable:false})
    status!: keyof typeof AnimeStatus;

    @Field(() => AnimeSeason, {nullable:false})
    season!: keyof typeof AnimeSeason;

    @Field(() => Int, {nullable:true})
    episodesCount?: number;

    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    countryOfOrigin?: string;

    @Field(() => Boolean, {nullable:false})
    isLicensed!: boolean;

    @Field(() => Boolean, {nullable:false})
    isAdult!: boolean;

    @Field(() => AgeRating, {nullable:false})
    rating!: keyof typeof AgeRating;

    @Field(() => AnimeSource, {nullable:false})
    source!: keyof typeof AnimeSource;

    @Field(() => [String], {nullable:true})
    openings?: Array<string>;

    @Field(() => [String], {nullable:true})
    endings?: Array<string>;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @HideField()
    producerIDs?: Array<string>;

    @HideField()
    studioIDs?: Array<string>;

    @HideField()
    genreIDs?: Array<string>;

    @Field(() => AnimeCountAggregate, {nullable:true})
    _count?: AnimeCountAggregate;

    @Field(() => AnimeAvgAggregate, {nullable:true})
    _avg?: AnimeAvgAggregate;

    @Field(() => AnimeSumAggregate, {nullable:true})
    _sum?: AnimeSumAggregate;

    @Field(() => AnimeMinAggregate, {nullable:true})
    _min?: AnimeMinAggregate;

    @Field(() => AnimeMaxAggregate, {nullable:true})
    _max?: AnimeMaxAggregate;
}
