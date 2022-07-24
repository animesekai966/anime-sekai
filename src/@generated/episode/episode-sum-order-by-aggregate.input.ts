import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class EpisodeSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    number?: keyof typeof SortOrder;
}
