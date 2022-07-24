import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { EpisodeCountOrderByAggregateInput } from './episode-count-order-by-aggregate.input';
import { EpisodeAvgOrderByAggregateInput } from './episode-avg-order-by-aggregate.input';
import { EpisodeMaxOrderByAggregateInput } from './episode-max-order-by-aggregate.input';
import { EpisodeMinOrderByAggregateInput } from './episode-min-order-by-aggregate.input';
import { EpisodeSumOrderByAggregateInput } from './episode-sum-order-by-aggregate.input';

@InputType()
export class EpisodeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filler?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeId?: keyof typeof SortOrder;

    @Field(() => EpisodeCountOrderByAggregateInput, {nullable:true})
    _count?: EpisodeCountOrderByAggregateInput;

    @Field(() => EpisodeAvgOrderByAggregateInput, {nullable:true})
    _avg?: EpisodeAvgOrderByAggregateInput;

    @Field(() => EpisodeMaxOrderByAggregateInput, {nullable:true})
    _max?: EpisodeMaxOrderByAggregateInput;

    @Field(() => EpisodeMinOrderByAggregateInput, {nullable:true})
    _min?: EpisodeMinOrderByAggregateInput;

    @Field(() => EpisodeSumOrderByAggregateInput, {nullable:true})
    _sum?: EpisodeSumOrderByAggregateInput;
}
