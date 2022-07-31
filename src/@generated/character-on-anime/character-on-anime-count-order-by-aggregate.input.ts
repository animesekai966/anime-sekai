import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HideField } from '@nestjs/graphql';

@InputType()
export class CharacterOnAnimeCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @HideField()
    relationId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @HideField()
    animeId?: keyof typeof SortOrder;

    @HideField()
    staffId?: keyof typeof SortOrder;

    @HideField()
    characterId?: keyof typeof SortOrder;
}
