import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharactersOnAnimesCountOrderByAggregateInput } from './characters-on-animes-count-order-by-aggregate.input';
import { CharactersOnAnimesMaxOrderByAggregateInput } from './characters-on-animes-max-order-by-aggregate.input';
import { CharactersOnAnimesMinOrderByAggregateInput } from './characters-on-animes-min-order-by-aggregate.input';

@InputType()
export class CharactersOnAnimesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeId?: keyof typeof SortOrder;

    @Field(() => CharactersOnAnimesCountOrderByAggregateInput, {nullable:true})
    _count?: CharactersOnAnimesCountOrderByAggregateInput;

    @Field(() => CharactersOnAnimesMaxOrderByAggregateInput, {nullable:true})
    _max?: CharactersOnAnimesMaxOrderByAggregateInput;

    @Field(() => CharactersOnAnimesMinOrderByAggregateInput, {nullable:true})
    _min?: CharactersOnAnimesMinOrderByAggregateInput;
}
