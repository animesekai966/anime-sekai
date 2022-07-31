import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeOrderByWithRelationInput } from '../anime/anime-order-by-with-relation.input';
import { ServerOrderByCompositeAggregateInput } from '../server/server-order-by-composite-aggregate.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class EpisodeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => AnimeOrderByWithRelationInput, {nullable:true})
    anime?: AnimeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => ServerOrderByCompositeAggregateInput, {nullable:true})
    servers?: ServerOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filler?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @HideField()
    animeId?: keyof typeof SortOrder;
}
