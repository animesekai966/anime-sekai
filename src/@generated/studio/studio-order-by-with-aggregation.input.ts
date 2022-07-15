import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { StudioCountOrderByAggregateInput } from './studio-count-order-by-aggregate.input';
import { StudioMaxOrderByAggregateInput } from './studio-max-order-by-aggregate.input';
import { StudioMinOrderByAggregateInput } from './studio-min-order-by-aggregate.input';

@InputType()
export class StudioOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => StudioCountOrderByAggregateInput, {nullable:true})
    _count?: StudioCountOrderByAggregateInput;

    @Field(() => StudioMaxOrderByAggregateInput, {nullable:true})
    _max?: StudioMaxOrderByAggregateInput;

    @Field(() => StudioMinOrderByAggregateInput, {nullable:true})
    _min?: StudioMinOrderByAggregateInput;
}
