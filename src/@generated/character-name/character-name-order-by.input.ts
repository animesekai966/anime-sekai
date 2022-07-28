import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CharacterNameOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    english?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    native?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alternates?: keyof typeof SortOrder;
}
