import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { StaffOnAnimeCountOrderByAggregateInput } from './staff-on-anime-count-order-by-aggregate.input';
import { StaffOnAnimeMaxOrderByAggregateInput } from './staff-on-anime-max-order-by-aggregate.input';
import { StaffOnAnimeMinOrderByAggregateInput } from './staff-on-anime-min-order-by-aggregate.input';

@InputType()
export class StaffOnAnimeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    relationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @HideField()
    animeId?: keyof typeof SortOrder;

    @HideField()
    staffId?: keyof typeof SortOrder;

    @Field(() => StaffOnAnimeCountOrderByAggregateInput, {nullable:true})
    _count?: StaffOnAnimeCountOrderByAggregateInput;

    @Field(() => StaffOnAnimeMaxOrderByAggregateInput, {nullable:true})
    _max?: StaffOnAnimeMaxOrderByAggregateInput;

    @Field(() => StaffOnAnimeMinOrderByAggregateInput, {nullable:true})
    _min?: StaffOnAnimeMinOrderByAggregateInput;
}
