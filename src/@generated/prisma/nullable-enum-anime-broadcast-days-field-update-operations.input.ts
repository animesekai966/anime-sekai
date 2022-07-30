import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastDays } from '../anime/anime-broadcast-days.enum';

@InputType()
export class NullableEnumAnimeBroadcastDaysFieldUpdateOperationsInput {

    @Field(() => AnimeBroadcastDays, {nullable:true})
    set?: keyof typeof AnimeBroadcastDays;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
