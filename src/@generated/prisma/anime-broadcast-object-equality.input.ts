import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastDays } from '../anime/anime-broadcast-days.enum';

@InputType()
export class AnimeBroadcastObjectEqualityInput {

    @Field(() => AnimeBroadcastDays, {nullable:true})
    day?: keyof typeof AnimeBroadcastDays;

    @Field(() => String, {nullable:true})
    time?: string;

    @Field(() => String, {nullable:true})
    timezone?: string;

    @Field(() => String, {nullable:true})
    string?: string;
}
