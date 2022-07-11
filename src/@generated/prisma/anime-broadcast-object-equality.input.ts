import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BroadcastDays } from './broadcast-days.enum';

@InputType()
export class AnimeBroadcastObjectEqualityInput {

    @Field(() => BroadcastDays, {nullable:false})
    day!: keyof typeof BroadcastDays;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => String, {nullable:false})
    timezone!: string;
}
