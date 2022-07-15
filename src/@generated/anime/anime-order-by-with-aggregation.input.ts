import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeCountOrderByAggregateInput } from './anime-count-order-by-aggregate.input';
import { AnimeMaxOrderByAggregateInput } from './anime-max-order-by-aggregate.input';
import { AnimeMinOrderByAggregateInput } from './anime-min-order-by-aggregate.input';

@InputType()
export class AnimeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => AnimeCountOrderByAggregateInput, {nullable:true})
    _count?: AnimeCountOrderByAggregateInput;

    @Field(() => AnimeMaxOrderByAggregateInput, {nullable:true})
    _max?: AnimeMaxOrderByAggregateInput;

    @Field(() => AnimeMinOrderByAggregateInput, {nullable:true})
    _min?: AnimeMinOrderByAggregateInput;
}
