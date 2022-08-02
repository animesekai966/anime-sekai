import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { AnimeSources } from '../prisma/anime-sources.enum';
import { EpisodeLanguage } from '../prisma/episode-language.enum';
import { HideField } from '@nestjs/graphql';
import { EpisodeCountAggregate } from './episode-count-aggregate.output';
import { EpisodeAvgAggregate } from './episode-avg-aggregate.output';
import { EpisodeSumAggregate } from './episode-sum-aggregate.output';
import { EpisodeMinAggregate } from './episode-min-aggregate.output';
import { EpisodeMaxAggregate } from './episode-max-aggregate.output';

@ObjectType()
export class EpisodeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Float, {nullable:false})
    number!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeSources, {nullable:false})
    source!: keyof typeof AnimeSources;

    @Field(() => Boolean, {nullable:false})
    filler!: boolean;

    @Field(() => Boolean, {nullable:false})
    last!: boolean;

    @Field(() => EpisodeLanguage, {nullable:false})
    language!: keyof typeof EpisodeLanguage;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @HideField()
    animeId!: string;

    @Field(() => EpisodeCountAggregate, {nullable:true})
    _count?: EpisodeCountAggregate;

    @Field(() => EpisodeAvgAggregate, {nullable:true})
    _avg?: EpisodeAvgAggregate;

    @Field(() => EpisodeSumAggregate, {nullable:true})
    _sum?: EpisodeSumAggregate;

    @Field(() => EpisodeMinAggregate, {nullable:true})
    _min?: EpisodeMinAggregate;

    @Field(() => EpisodeMaxAggregate, {nullable:true})
    _max?: EpisodeMaxAggregate;
}
