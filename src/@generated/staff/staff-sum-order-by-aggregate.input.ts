import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StaffSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;
}
