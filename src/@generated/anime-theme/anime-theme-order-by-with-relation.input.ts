import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeOrderByRelationAggregateInput } from '../anime/anime-order-by-relation-aggregate.input';

@InputType()
export class AnimeThemeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeIDs?: keyof typeof SortOrder;

    @Field(() => AnimeOrderByRelationAggregateInput, {nullable:true})
    animes?: AnimeOrderByRelationAggregateInput;
}
