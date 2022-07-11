import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimeStudioCountAggregate } from './anime-studio-count-aggregate.output';
import { AnimeStudioAvgAggregate } from './anime-studio-avg-aggregate.output';
import { AnimeStudioSumAggregate } from './anime-studio-sum-aggregate.output';
import { AnimeStudioMinAggregate } from './anime-studio-min-aggregate.output';
import { AnimeStudioMaxAggregate } from './anime-studio-max-aggregate.output';

@ObjectType()
export class AggregateAnimeStudio {

    @Field(() => AnimeStudioCountAggregate, {nullable:true})
    _count?: AnimeStudioCountAggregate;

    @Field(() => AnimeStudioAvgAggregate, {nullable:true})
    _avg?: AnimeStudioAvgAggregate;

    @Field(() => AnimeStudioSumAggregate, {nullable:true})
    _sum?: AnimeStudioSumAggregate;

    @Field(() => AnimeStudioMinAggregate, {nullable:true})
    _min?: AnimeStudioMinAggregate;

    @Field(() => AnimeStudioMaxAggregate, {nullable:true})
    _max?: AnimeStudioMaxAggregate;
}
