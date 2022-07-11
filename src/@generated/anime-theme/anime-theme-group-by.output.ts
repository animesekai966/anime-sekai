import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeThemeCountAggregate } from './anime-theme-count-aggregate.output';
import { AnimeThemeAvgAggregate } from './anime-theme-avg-aggregate.output';
import { AnimeThemeSumAggregate } from './anime-theme-sum-aggregate.output';
import { AnimeThemeMinAggregate } from './anime-theme-min-aggregate.output';
import { AnimeThemeMaxAggregate } from './anime-theme-max-aggregate.output';

@ObjectType()
export class AnimeThemeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [String], {nullable:true})
    animeIDs?: Array<string>;

    @Field(() => AnimeThemeCountAggregate, {nullable:true})
    _count?: AnimeThemeCountAggregate;

    @Field(() => AnimeThemeAvgAggregate, {nullable:true})
    _avg?: AnimeThemeAvgAggregate;

    @Field(() => AnimeThemeSumAggregate, {nullable:true})
    _sum?: AnimeThemeSumAggregate;

    @Field(() => AnimeThemeMinAggregate, {nullable:true})
    _min?: AnimeThemeMinAggregate;

    @Field(() => AnimeThemeMaxAggregate, {nullable:true})
    _max?: AnimeThemeMaxAggregate;
}
