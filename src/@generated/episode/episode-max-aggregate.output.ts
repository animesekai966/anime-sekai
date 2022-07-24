import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeSources } from '../prisma/anime-sources.enum';
import { EpisodeLanguage } from '../prisma/episode-language.enum';

@ObjectType()
export class EpisodeMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    number?: number;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => AnimeSources, {nullable:true})
    source?: keyof typeof AnimeSources;

    @Field(() => Boolean, {nullable:true})
    filler?: boolean;

    @Field(() => Boolean, {nullable:true})
    last?: boolean;

    @Field(() => EpisodeLanguage, {nullable:true})
    language?: keyof typeof EpisodeLanguage;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    animeId?: string;
}
