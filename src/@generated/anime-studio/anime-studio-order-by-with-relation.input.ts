import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeOrderByRelationAggregateInput } from '../anime/anime-order-by-relation-aggregate.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AnimeStudioOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => AnimeOrderByRelationAggregateInput, {nullable:true})
    animes?: AnimeOrderByRelationAggregateInput;

    @HideField()
    animeIDs?: keyof typeof SortOrder;

    @HideField()
    animesProduced?: AnimeOrderByRelationAggregateInput;
}
