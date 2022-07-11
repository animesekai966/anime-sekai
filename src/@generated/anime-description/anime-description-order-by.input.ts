import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AnimeDescriptionOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    ar?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    en?: keyof typeof SortOrder;
}
