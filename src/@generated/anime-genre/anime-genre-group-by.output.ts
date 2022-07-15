import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeGenreType } from '../prisma/anime-genre-type.enum';
import { HideField } from '@nestjs/graphql';
import { AnimeGenreCountAggregate } from './anime-genre-count-aggregate.output';
import { AnimeGenreAvgAggregate } from './anime-genre-avg-aggregate.output';
import { AnimeGenreSumAggregate } from './anime-genre-sum-aggregate.output';
import { AnimeGenreMinAggregate } from './anime-genre-min-aggregate.output';
import { AnimeGenreMaxAggregate } from './anime-genre-max-aggregate.output';

@ObjectType()
export class AnimeGenreGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeGenreType, {nullable:false})
    type!: keyof typeof AnimeGenreType;

    @HideField()
    animeIDs?: Array<string>;

    @Field(() => AnimeGenreCountAggregate, {nullable:true})
    _count?: AnimeGenreCountAggregate;

    @Field(() => AnimeGenreAvgAggregate, {nullable:true})
    _avg?: AnimeGenreAvgAggregate;

    @Field(() => AnimeGenreSumAggregate, {nullable:true})
    _sum?: AnimeGenreSumAggregate;

    @Field(() => AnimeGenreMinAggregate, {nullable:true})
    _min?: AnimeGenreMinAggregate;

    @Field(() => AnimeGenreMaxAggregate, {nullable:true})
    _max?: AnimeGenreMaxAggregate;
}
