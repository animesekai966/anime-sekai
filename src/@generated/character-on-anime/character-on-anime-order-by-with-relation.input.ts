import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeOrderByWithRelationInput } from '../anime/anime-order-by-with-relation.input';
import { StaffOrderByRelationAggregateInput } from '../staff/staff-order-by-relation-aggregate.input';
import { CharacterOrderByWithRelationInput } from '../character/character-order-by-with-relation.input';

@InputType()
export class CharacterOnAnimeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    relationId?: keyof typeof SortOrder;

    @Field(() => AnimeOrderByWithRelationInput, {nullable:true})
    anime?: AnimeOrderByWithRelationInput;

    @Field(() => StaffOrderByRelationAggregateInput, {nullable:true})
    voiceActors?: StaffOrderByRelationAggregateInput;

    @Field(() => CharacterOrderByWithRelationInput, {nullable:true})
    character?: CharacterOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    characterId?: keyof typeof SortOrder;
}
