import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GenreCountOrderByAggregateInput } from './genre-count-order-by-aggregate.input';
import { GenreMaxOrderByAggregateInput } from './genre-max-order-by-aggregate.input';
import { GenreMinOrderByAggregateInput } from './genre-min-order-by-aggregate.input';

@InputType()
export class GenreOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => GenreCountOrderByAggregateInput, {nullable:true})
    _count?: GenreCountOrderByAggregateInput;

    @Field(() => GenreMaxOrderByAggregateInput, {nullable:true})
    _max?: GenreMaxOrderByAggregateInput;

    @Field(() => GenreMinOrderByAggregateInput, {nullable:true})
    _min?: GenreMinOrderByAggregateInput;
}
