import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimeCountAggregate } from './anime-count-aggregate.output';
import { AnimeMinAggregate } from './anime-min-aggregate.output';
import { AnimeMaxAggregate } from './anime-max-aggregate.output';

@ObjectType()
export class AggregateAnime {

    @Field(() => AnimeCountAggregate, {nullable:true})
    _count?: AnimeCountAggregate;

    @Field(() => AnimeMinAggregate, {nullable:true})
    _min?: AnimeMinAggregate;

    @Field(() => AnimeMaxAggregate, {nullable:true})
    _max?: AnimeMaxAggregate;
}
