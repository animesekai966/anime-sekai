import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { StudioCountOrderByAggregateInput } from './studio-count-order-by-aggregate.input';
import { StudioAvgOrderByAggregateInput } from './studio-avg-order-by-aggregate.input';
import { StudioMaxOrderByAggregateInput } from './studio-max-order-by-aggregate.input';
import { StudioMinOrderByAggregateInput } from './studio-min-order-by-aggregate.input';
import { StudioSumOrderByAggregateInput } from './studio-sum-order-by-aggregate.input';

@InputType()
export class StudioOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @HideField()
    animatedAnimeIDs?: keyof typeof SortOrder;

    @HideField()
    producedAnimeIDs?: keyof typeof SortOrder;

    @Field(() => StudioCountOrderByAggregateInput, {nullable:true})
    _count?: StudioCountOrderByAggregateInput;

    @Field(() => StudioAvgOrderByAggregateInput, {nullable:true})
    _avg?: StudioAvgOrderByAggregateInput;

    @Field(() => StudioMaxOrderByAggregateInput, {nullable:true})
    _max?: StudioMaxOrderByAggregateInput;

    @Field(() => StudioMinOrderByAggregateInput, {nullable:true})
    _min?: StudioMinOrderByAggregateInput;

    @Field(() => StudioSumOrderByAggregateInput, {nullable:true})
    _sum?: StudioSumOrderByAggregateInput;
}
