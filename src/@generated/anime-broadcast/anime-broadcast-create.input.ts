import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastDays } from '../anime/anime-broadcast-days.enum';

@InputType()
export class AnimeBroadcastCreateInput {

    @Field(() => AnimeBroadcastDays, {nullable:false})
    day!: keyof typeof AnimeBroadcastDays;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => String, {nullable:false})
    timezone!: string;

    @Field(() => String, {nullable:false})
    string!: string;
}
