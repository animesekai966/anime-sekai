import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class FuzzyDateOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    year?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    month?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;
}
