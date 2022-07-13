import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BroadcastDays } from './broadcast-days.enum';
import { NestedEnumBroadcastDaysNullableFilter } from './nested-enum-broadcast-days-nullable-filter.input';

@InputType()
export class EnumBroadcastDaysNullableFilter {

    @Field(() => BroadcastDays, {nullable:true})
    equals?: keyof typeof BroadcastDays;

    @Field(() => [BroadcastDays], {nullable:true})
    in?: Array<keyof typeof BroadcastDays>;

    @Field(() => [BroadcastDays], {nullable:true})
    notIn?: Array<keyof typeof BroadcastDays>;

    @Field(() => NestedEnumBroadcastDaysNullableFilter, {nullable:true})
    not?: NestedEnumBroadcastDaysNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
