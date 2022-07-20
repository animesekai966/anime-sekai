import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { GenreCountOrderByAggregateInput } from './genre-count-order-by-aggregate.input';
import { GenreAvgOrderByAggregateInput } from './genre-avg-order-by-aggregate.input';
import { GenreMaxOrderByAggregateInput } from './genre-max-order-by-aggregate.input';
import { GenreMinOrderByAggregateInput } from './genre-min-order-by-aggregate.input';
import { GenreSumOrderByAggregateInput } from './genre-sum-order-by-aggregate.input';

@InputType()
export class GenreOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeIDs?: keyof typeof SortOrder;

    @Field(() => GenreCountOrderByAggregateInput, {nullable:true})
    _count?: GenreCountOrderByAggregateInput;

    @Field(() => GenreAvgOrderByAggregateInput, {nullable:true})
    _avg?: GenreAvgOrderByAggregateInput;

    @Field(() => GenreMaxOrderByAggregateInput, {nullable:true})
    _max?: GenreMaxOrderByAggregateInput;

    @Field(() => GenreMinOrderByAggregateInput, {nullable:true})
    _min?: GenreMinOrderByAggregateInput;

    @Field(() => GenreSumOrderByAggregateInput, {nullable:true})
    _sum?: GenreSumOrderByAggregateInput;
}
