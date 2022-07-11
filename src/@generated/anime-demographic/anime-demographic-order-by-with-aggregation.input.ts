import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeDemographicCountOrderByAggregateInput } from './anime-demographic-count-order-by-aggregate.input';
import { AnimeDemographicAvgOrderByAggregateInput } from './anime-demographic-avg-order-by-aggregate.input';
import { AnimeDemographicMaxOrderByAggregateInput } from './anime-demographic-max-order-by-aggregate.input';
import { AnimeDemographicMinOrderByAggregateInput } from './anime-demographic-min-order-by-aggregate.input';
import { AnimeDemographicSumOrderByAggregateInput } from './anime-demographic-sum-order-by-aggregate.input';

@InputType()
export class AnimeDemographicOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeIDs?: keyof typeof SortOrder;

    @Field(() => AnimeDemographicCountOrderByAggregateInput, {nullable:true})
    _count?: AnimeDemographicCountOrderByAggregateInput;

    @Field(() => AnimeDemographicAvgOrderByAggregateInput, {nullable:true})
    _avg?: AnimeDemographicAvgOrderByAggregateInput;

    @Field(() => AnimeDemographicMaxOrderByAggregateInput, {nullable:true})
    _max?: AnimeDemographicMaxOrderByAggregateInput;

    @Field(() => AnimeDemographicMinOrderByAggregateInput, {nullable:true})
    _min?: AnimeDemographicMinOrderByAggregateInput;

    @Field(() => AnimeDemographicSumOrderByAggregateInput, {nullable:true})
    _sum?: AnimeDemographicSumOrderByAggregateInput;
}
