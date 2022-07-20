import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CharacterOrderByWithRelationInput } from '../character/character-order-by-with-relation.input';
import { StaffOrderByWithRelationInput } from '../staff/staff-order-by-with-relation.input';
import { AnimeOrderByWithRelationInput } from '../anime/anime-order-by-with-relation.input';

@InputType()
export class CharactersOnAnimesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => CharacterOrderByWithRelationInput, {nullable:true})
    character?: CharacterOrderByWithRelationInput;

    @Field(() => StaffOrderByWithRelationInput, {nullable:true})
    staff?: StaffOrderByWithRelationInput;

    @Field(() => AnimeOrderByWithRelationInput, {nullable:true})
    anime?: AnimeOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    characterId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeId?: keyof typeof SortOrder;
}
