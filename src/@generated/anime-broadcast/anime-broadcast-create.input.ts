import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BroadcastDays } from '../prisma/broadcast-days.enum';

@InputType()
export class AnimeBroadcastCreateInput {

    @Field(() => BroadcastDays, {nullable:true})
    day?: keyof typeof BroadcastDays;

    @Field(() => String, {nullable:true})
    time?: string;

    @Field(() => String, {nullable:true})
    timezone?: string;
}
