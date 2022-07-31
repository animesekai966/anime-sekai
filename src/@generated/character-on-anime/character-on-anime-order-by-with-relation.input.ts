import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { AnimeOrderByWithRelationInput } from '../anime/anime-order-by-with-relation.input';
import { StaffOrderByRelationAggregateInput } from '../staff/staff-order-by-relation-aggregate.input';
import { CharacterOrderByWithRelationInput } from '../character/character-order-by-with-relation.input';

@InputType()
export class CharacterOnAnimeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    relationId?: keyof typeof SortOrder;

    @Field(() => AnimeOrderByWithRelationInput, {nullable:true})
    anime?: AnimeOrderByWithRelationInput;

    @Field(() => StaffOrderByRelationAggregateInput, {nullable:true})
    voiceActors?: StaffOrderByRelationAggregateInput;

    @Field(() => CharacterOrderByWithRelationInput, {nullable:true})
    character?: CharacterOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @HideField()
    animeId?: keyof typeof SortOrder;

    @HideField()
    staffId?: keyof typeof SortOrder;

    @HideField()
    characterId?: keyof typeof SortOrder;
}
