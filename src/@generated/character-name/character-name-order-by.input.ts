import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CharacterNameOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    first?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    middle?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    last?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    full?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    native?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alternative?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alternativeSpoiler?: keyof typeof SortOrder;
}
