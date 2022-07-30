import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class StaffAvgOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;
}
