import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeStudioCountOrderByAggregateInput } from './anime-studio-count-order-by-aggregate.input';
import { AnimeStudioAvgOrderByAggregateInput } from './anime-studio-avg-order-by-aggregate.input';
import { AnimeStudioMaxOrderByAggregateInput } from './anime-studio-max-order-by-aggregate.input';
import { AnimeStudioMinOrderByAggregateInput } from './anime-studio-min-order-by-aggregate.input';
import { AnimeStudioSumOrderByAggregateInput } from './anime-studio-sum-order-by-aggregate.input';

@InputType()
export class AnimeStudioOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeIDs?: keyof typeof SortOrder;

    @Field(() => AnimeStudioCountOrderByAggregateInput, {nullable:true})
    _count?: AnimeStudioCountOrderByAggregateInput;

    @Field(() => AnimeStudioAvgOrderByAggregateInput, {nullable:true})
    _avg?: AnimeStudioAvgOrderByAggregateInput;

    @Field(() => AnimeStudioMaxOrderByAggregateInput, {nullable:true})
    _max?: AnimeStudioMaxOrderByAggregateInput;

    @Field(() => AnimeStudioMinOrderByAggregateInput, {nullable:true})
    _min?: AnimeStudioMinOrderByAggregateInput;

    @Field(() => AnimeStudioSumOrderByAggregateInput, {nullable:true})
    _sum?: AnimeStudioSumOrderByAggregateInput;
}
