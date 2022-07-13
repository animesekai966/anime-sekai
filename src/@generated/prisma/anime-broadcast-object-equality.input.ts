import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BroadcastDays } from './broadcast-days.enum';

@InputType()
export class AnimeBroadcastObjectEqualityInput {

    @Field(() => BroadcastDays, {nullable:true})
    day?: keyof typeof BroadcastDays;

    @Field(() => String, {nullable:true})
    time?: string;

    @Field(() => String, {nullable:true})
    timezone?: string;
}
