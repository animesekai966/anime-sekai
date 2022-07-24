import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { EpisodeCountAggregate } from './episode-count-aggregate.output';
import { EpisodeAvgAggregate } from './episode-avg-aggregate.output';
import { EpisodeSumAggregate } from './episode-sum-aggregate.output';
import { EpisodeMinAggregate } from './episode-min-aggregate.output';
import { EpisodeMaxAggregate } from './episode-max-aggregate.output';

@ObjectType()
export class AggregateEpisode {

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
