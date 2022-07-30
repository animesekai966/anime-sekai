import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastDays } from '../anime/anime-broadcast-days.enum';
import { NestedEnumAnimeBroadcastDaysNullableFilter } from './nested-enum-anime-broadcast-days-nullable-filter.input';

@InputType()
export class EnumAnimeBroadcastDaysNullableFilter {

    @Field(() => AnimeBroadcastDays, {nullable:true})
    equals?: keyof typeof AnimeBroadcastDays;

    @Field(() => [AnimeBroadcastDays], {nullable:true})
    in?: Array<keyof typeof AnimeBroadcastDays>;

    @Field(() => [AnimeBroadcastDays], {nullable:true})
    notIn?: Array<keyof typeof AnimeBroadcastDays>;

    @Field(() => NestedEnumAnimeBroadcastDaysNullableFilter, {nullable:true})
    not?: NestedEnumAnimeBroadcastDaysNullableFilter;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
