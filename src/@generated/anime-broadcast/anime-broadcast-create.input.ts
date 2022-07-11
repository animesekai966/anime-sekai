import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { BroadcastDays } from '../prisma/broadcast-days.enum';

@InputType()
export class AnimeBroadcastCreateInput {

    @Field(() => BroadcastDays, {nullable:false})
    day!: keyof typeof BroadcastDays;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => String, {nullable:false})
    timezone!: string;
}
