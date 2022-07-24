import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { EpisodeWhereInput } from './episode-where.input';
import { Type } from 'class-transformer';
import { EpisodeOrderByWithRelationInput } from './episode-order-by-with-relation.input';
import { EpisodeWhereUniqueInput } from './episode-where-unique.input';
import { Int } from '@nestjs/graphql';
import { EpisodeCountAggregateInput } from './episode-count-aggregate.input';
import { EpisodeAvgAggregateInput } from './episode-avg-aggregate.input';
import { EpisodeSumAggregateInput } from './episode-sum-aggregate.input';
import { EpisodeMinAggregateInput } from './episode-min-aggregate.input';
import { EpisodeMaxAggregateInput } from './episode-max-aggregate.input';

@ArgsType()
export class EpisodeAggregateArgs {

    @Field(() => EpisodeWhereInput, {nullable:true})
    @Type(() => EpisodeWhereInput)
    where?: EpisodeWhereInput;

    @Field(() => [EpisodeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<EpisodeOrderByWithRelationInput>;

    @Field(() => EpisodeWhereUniqueInput, {nullable:true})
    cursor?: EpisodeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => EpisodeCountAggregateInput, {nullable:true})
    _count?: EpisodeCountAggregateInput;

    @Field(() => EpisodeAvgAggregateInput, {nullable:true})
    _avg?: EpisodeAvgAggregateInput;

    @Field(() => EpisodeSumAggregateInput, {nullable:true})
    _sum?: EpisodeSumAggregateInput;

    @Field(() => EpisodeMinAggregateInput, {nullable:true})
    _min?: EpisodeMinAggregateInput;

    @Field(() => EpisodeMaxAggregateInput, {nullable:true})
    _max?: EpisodeMaxAggregateInput;
}
