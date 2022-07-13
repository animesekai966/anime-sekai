import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { BroadcastDays } from '../prisma/broadcast-days.enum';

@ObjectType()
export class AnimeBroadcast {

    @Field(() => BroadcastDays, {nullable:true})
    day!: keyof typeof BroadcastDays | null;

    @Field(() => String, {nullable:true})
    time!: string | null;

    @Field(() => String, {nullable:true})
    timezone!: string | null;
}
