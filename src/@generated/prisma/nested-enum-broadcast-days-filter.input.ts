import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BroadcastDays } from './broadcast-days.enum';

@InputType()
export class NestedEnumBroadcastDaysFilter {

    @Field(() => BroadcastDays, {nullable:true})
    equals?: keyof typeof BroadcastDays;

    @Field(() => [BroadcastDays], {nullable:true})
    in?: Array<keyof typeof BroadcastDays>;

    @Field(() => [BroadcastDays], {nullable:true})
    notIn?: Array<keyof typeof BroadcastDays>;

    @Field(() => NestedEnumBroadcastDaysFilter, {nullable:true})
    not?: NestedEnumBroadcastDaysFilter;
}
