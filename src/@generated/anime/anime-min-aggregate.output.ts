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

@ObjectType()
export class AnimeMinAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @HideField()
    animeXId?: string;

    @Field(() => AnimeFormat, {nullable:true})
    format?: keyof typeof AnimeFormat;

    @Field(() => AnimeStatus, {nullable:true})
    status?: keyof typeof AnimeStatus;

    @Field(() => AnimeSeason, {nullable:true})
    season?: keyof typeof AnimeSeason;

    @Field(() => Int, {nullable:true})
    episodesCount?: number;

    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    countryOfOrigin?: string;

    @Field(() => Boolean, {nullable:true})
    isLicensed?: boolean;

    @Field(() => Boolean, {nullable:true})
    isAdult?: boolean;

    @Field(() => AgeRating, {nullable:true})
    rating?: keyof typeof AgeRating;

    @Field(() => AnimeSource, {nullable:true})
    source?: keyof typeof AnimeSource;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
