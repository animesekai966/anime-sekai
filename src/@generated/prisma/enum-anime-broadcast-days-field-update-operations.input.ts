import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastDays } from '../anime/anime-broadcast-days.enum';

@InputType()
export class EnumAnimeBroadcastDaysFieldUpdateOperationsInput {

    @Field(() => AnimeBroadcastDays, {nullable:true})
    set?: keyof typeof AnimeBroadcastDays;
}
