import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeThemeCountOrderByAggregateInput } from './anime-theme-count-order-by-aggregate.input';
import { AnimeThemeAvgOrderByAggregateInput } from './anime-theme-avg-order-by-aggregate.input';
import { AnimeThemeMaxOrderByAggregateInput } from './anime-theme-max-order-by-aggregate.input';
import { AnimeThemeMinOrderByAggregateInput } from './anime-theme-min-order-by-aggregate.input';
import { AnimeThemeSumOrderByAggregateInput } from './anime-theme-sum-order-by-aggregate.input';

@InputType()
export class AnimeThemeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeIDs?: keyof typeof SortOrder;

    @Field(() => AnimeThemeCountOrderByAggregateInput, {nullable:true})
    _count?: AnimeThemeCountOrderByAggregateInput;

    @Field(() => AnimeThemeAvgOrderByAggregateInput, {nullable:true})
    _avg?: AnimeThemeAvgOrderByAggregateInput;

    @Field(() => AnimeThemeMaxOrderByAggregateInput, {nullable:true})
    _max?: AnimeThemeMaxOrderByAggregateInput;

    @Field(() => AnimeThemeMinOrderByAggregateInput, {nullable:true})
    _min?: AnimeThemeMinOrderByAggregateInput;

    @Field(() => AnimeThemeSumOrderByAggregateInput, {nullable:true})
    _sum?: AnimeThemeSumOrderByAggregateInput;
}
