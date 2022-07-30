import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterOnAnimeCountOrderByAggregateInput } from './character-on-anime-count-order-by-aggregate.input';
import { CharacterOnAnimeMaxOrderByAggregateInput } from './character-on-anime-max-order-by-aggregate.input';
import { CharacterOnAnimeMinOrderByAggregateInput } from './character-on-anime-min-order-by-aggregate.input';

@InputType()
export class CharacterOnAnimeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterId?: keyof typeof SortOrder;

    @Field(() => CharacterOnAnimeCountOrderByAggregateInput, {nullable:true})
    _count?: CharacterOnAnimeCountOrderByAggregateInput;

    @Field(() => CharacterOnAnimeMaxOrderByAggregateInput, {nullable:true})
    _max?: CharacterOnAnimeMaxOrderByAggregateInput;

    @Field(() => CharacterOnAnimeMinOrderByAggregateInput, {nullable:true})
    _min?: CharacterOnAnimeMinOrderByAggregateInput;
}
