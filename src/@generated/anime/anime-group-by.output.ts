import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeType } from '../prisma/anime-type.enum';
import { AgeRating } from '../prisma/age-rating.enum';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { AnimeStatus } from '../prisma/anime-status.enum';
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

    @Field(() => String, {nullable:false})
    animeXId!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => AnimeType, {nullable:false})
    type!: keyof typeof AnimeType;

    @Field(() => String, {nullable:false})
    duration!: string;

    @Field(() => AgeRating, {nullable:false})
    ageRating!: keyof typeof AgeRating;

    @Field(() => AnimeSeason, {nullable:false})
    season!: keyof typeof AnimeSeason;

    @Field(() => String, {nullable:false})
    source!: string;

    @Field(() => AnimeStatus, {nullable:false})
    status!: keyof typeof AnimeStatus;

    @Field(() => Int, {nullable:true})
    episodesCount?: number;

    @Field(() => [String], {nullable:true})
    openings?: Array<string>;

    @Field(() => [String], {nullable:true})
    endings?: Array<string>;

    @Field(() => [String], {nullable:true})
    genreIDs?: Array<string>;

    @Field(() => [String], {nullable:true})
    studioIDs?: Array<string>;

    @Field(() => [String], {nullable:true})
    producerIDs?: Array<string>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

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
