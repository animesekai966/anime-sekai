import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastDays } from '../anime/anime-broadcast-days.enum';

@InputType()
export class NestedEnumAnimeBroadcastDaysNullableFilter {

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
