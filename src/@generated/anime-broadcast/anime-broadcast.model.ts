import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BroadcastDays } from '../prisma/broadcast-days.enum';

@ObjectType()
export class AnimeBroadcast {

    @Field(() => BroadcastDays, {nullable:false})
    day!: keyof typeof BroadcastDays;

    @Field(() => String, {nullable:false})
    time!: string;

    @Field(() => String, {nullable:false})
    timezone!: string;
}
