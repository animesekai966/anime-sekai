import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastCreateInput } from '../anime-broadcast/anime-broadcast-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeBroadcastNullableCreateEnvelopeInput {

    @Field(() => AnimeBroadcastCreateInput, {nullable:true})
    @Type(() => AnimeBroadcastCreateInput)
    set?: AnimeBroadcastCreateInput;
}
