import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { AnimeCountOrderByAggregateInput } from './anime-count-order-by-aggregate.input';
import { AnimeAvgOrderByAggregateInput } from './anime-avg-order-by-aggregate.input';
import { AnimeMaxOrderByAggregateInput } from './anime-max-order-by-aggregate.input';
import { AnimeMinOrderByAggregateInput } from './anime-min-order-by-aggregate.input';
import { AnimeSumOrderByAggregateInput } from './anime-sum-order-by-aggregate.input';

@InputType()
export class AnimeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    anilistId?: keyof typeof SortOrder;

    @HideField()
    animeXId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    season?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    episodesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryOfOrigin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isLicensed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAdult?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    rating?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    openings?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endings?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recommendations?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @HideField()
    producerIDs?: keyof typeof SortOrder;

    @HideField()
    studioIDs?: keyof typeof SortOrder;

    @HideField()
    genreIDs?: keyof typeof SortOrder;

    @Field(() => AnimeCountOrderByAggregateInput, {nullable:true})
    _count?: AnimeCountOrderByAggregateInput;

    @Field(() => AnimeAvgOrderByAggregateInput, {nullable:true})
    _avg?: AnimeAvgOrderByAggregateInput;

    @Field(() => AnimeMaxOrderByAggregateInput, {nullable:true})
    _max?: AnimeMaxOrderByAggregateInput;

    @Field(() => AnimeMinOrderByAggregateInput, {nullable:true})
    _min?: AnimeMinOrderByAggregateInput;

    @Field(() => AnimeSumOrderByAggregateInput, {nullable:true})
    _sum?: AnimeSumOrderByAggregateInput;
}
