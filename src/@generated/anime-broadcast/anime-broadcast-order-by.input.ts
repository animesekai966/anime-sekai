import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class AnimeBroadcastOrderByInput {

    @Field(() => SortOrder, {nullable:true})
    day?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    time?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timezone?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    string?: keyof typeof SortOrder;
}
