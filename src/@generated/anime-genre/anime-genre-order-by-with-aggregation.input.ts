import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeGenreCountOrderByAggregateInput } from './anime-genre-count-order-by-aggregate.input';
import { AnimeGenreAvgOrderByAggregateInput } from './anime-genre-avg-order-by-aggregate.input';
import { AnimeGenreMaxOrderByAggregateInput } from './anime-genre-max-order-by-aggregate.input';
import { AnimeGenreMinOrderByAggregateInput } from './anime-genre-min-order-by-aggregate.input';
import { AnimeGenreSumOrderByAggregateInput } from './anime-genre-sum-order-by-aggregate.input';

@InputType()
export class AnimeGenreOrderByWithAggregationInput {

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

    @Field(() => AnimeGenreCountOrderByAggregateInput, {nullable:true})
    _count?: AnimeGenreCountOrderByAggregateInput;

    @Field(() => AnimeGenreAvgOrderByAggregateInput, {nullable:true})
    _avg?: AnimeGenreAvgOrderByAggregateInput;

    @Field(() => AnimeGenreMaxOrderByAggregateInput, {nullable:true})
    _max?: AnimeGenreMaxOrderByAggregateInput;

    @Field(() => AnimeGenreMinOrderByAggregateInput, {nullable:true})
    _min?: AnimeGenreMinOrderByAggregateInput;

    @Field(() => AnimeGenreSumOrderByAggregateInput, {nullable:true})
    _sum?: AnimeGenreSumOrderByAggregateInput;
}
