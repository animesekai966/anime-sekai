import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimeThemeCountAggregate } from './anime-theme-count-aggregate.output';
import { AnimeThemeAvgAggregate } from './anime-theme-avg-aggregate.output';
import { AnimeThemeSumAggregate } from './anime-theme-sum-aggregate.output';
import { AnimeThemeMinAggregate } from './anime-theme-min-aggregate.output';
import { AnimeThemeMaxAggregate } from './anime-theme-max-aggregate.output';

@ObjectType()
export class AggregateAnimeTheme {

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
