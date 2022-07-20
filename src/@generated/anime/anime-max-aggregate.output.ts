import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeFormat } from '../prisma/anime-format.enum';
import { AnimeStatus } from '../prisma/anime-status.enum';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { AnimeSource } from '../prisma/anime-source.enum';

@ObjectType()
export class AnimeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    slug?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => String, {nullable:true})
    animeifyId?: string;

    @Field(() => Int, {nullable:true})
    animeSlayerId?: number;

    @Field(() => String, {nullable:true})
    xsAnimeId?: string;

    @Field(() => String, {nullable:true})
    animeBlkomId?: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => AnimeFormat, {nullable:true})
    format?: keyof typeof AnimeFormat;

    @Field(() => AnimeStatus, {nullable:true})
    status?: keyof typeof AnimeStatus;

    @Field(() => AnimeSeason, {nullable:true})
    season?: keyof typeof AnimeSeason;

    @Field(() => Int, {nullable:true})
    episodesCount?: number;

    @Field(() => Int, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    countryOfOrigin?: string;

    @Field(() => Boolean, {nullable:true})
    isLicensed?: boolean;

    @Field(() => Boolean, {nullable:true})
    isAdult?: boolean;

    @Field(() => AnimeSource, {nullable:true})
    source?: keyof typeof AnimeSource;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
