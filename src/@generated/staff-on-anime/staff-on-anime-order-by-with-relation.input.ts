import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';
import { AnimeOrderByWithRelationInput } from '../anime/anime-order-by-with-relation.input';
import { StaffOrderByWithRelationInput } from '../staff/staff-order-by-with-relation.input';

@InputType()
export class StaffOnAnimeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    relationId?: keyof typeof SortOrder;

    @Field(() => AnimeOrderByWithRelationInput, {nullable:true})
    anime?: AnimeOrderByWithRelationInput;

    @Field(() => StaffOrderByWithRelationInput, {nullable:true})
    staff?: StaffOrderByWithRelationInput;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @HideField()
    animeId?: keyof typeof SortOrder;

    @HideField()
    staffId?: keyof typeof SortOrder;
}
