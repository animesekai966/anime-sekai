import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeOrderByWithRelationInput } from '../anime/anime-order-by-with-relation.input';
import { StaffOrderByWithRelationInput } from '../staff/staff-order-by-with-relation.input';

@InputType()
export class CharacterOnAnimeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => AnimeOrderByWithRelationInput, {nullable:true})
    anime?: AnimeOrderByWithRelationInput;

    @Field(() => StaffOrderByWithRelationInput, {nullable:true})
    voiceActor?: StaffOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    staffId?: keyof typeof SortOrder;
}
