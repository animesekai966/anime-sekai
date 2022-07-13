import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BroadcastDays } from './broadcast-days.enum';

@InputType()
export class NullableEnumBroadcastDaysFieldUpdateOperationsInput {

    @Field(() => BroadcastDays, {nullable:true})
    set?: keyof typeof BroadcastDays;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
