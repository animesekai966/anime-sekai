import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimeBroadcastDays } from '../anime/anime-broadcast-days.enum';

@ObjectType()
export class AnimeBroadcast {

    @Field(() => AnimeBroadcastDays, {nullable:true})
    day!: keyof typeof AnimeBroadcastDays | null;

    @Field(() => String, {nullable:true})
    time!: string | null;

    @Field(() => String, {nullable:true})
    timezone!: string | null;

    @Field(() => String, {nullable:true})
    string!: string | null;
}
