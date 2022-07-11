import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeType } from '../prisma/anime-type.enum';
import { AgeRating } from '../prisma/age-rating.enum';
import { AnimeSeason } from '../prisma/anime-season.enum';

@ObjectType()
export class AnimeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => String, {nullable:true})
    animeXId?: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => AnimeType, {nullable:true})
    type?: keyof typeof AnimeType;

    @Field(() => String, {nullable:true})
    duration?: string;

    @Field(() => AgeRating, {nullable:true})
    ageRating?: keyof typeof AgeRating;

    @Field(() => AnimeSeason, {nullable:true})
    season?: keyof typeof AnimeSeason;
}
