import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastCreateInput } from '../anime-broadcast/anime-broadcast-create.input';
import { Type } from 'class-transformer';
import { AnimeBroadcastUpsertInput } from '../anime-broadcast/anime-broadcast-upsert.input';

@InputType()
export class AnimeBroadcastNullableUpdateEnvelopeInput {

    @Field(() => AnimeBroadcastCreateInput, {nullable:true})
    @Type(() => AnimeBroadcastCreateInput)
    set?: AnimeBroadcastCreateInput;

    @Field(() => AnimeBroadcastUpsertInput, {nullable:true})
    @Type(() => AnimeBroadcastUpsertInput)
    upsert?: AnimeBroadcastUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
