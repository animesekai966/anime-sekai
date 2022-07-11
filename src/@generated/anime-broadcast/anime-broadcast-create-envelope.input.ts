import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastCreateInput } from './anime-broadcast-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeBroadcastCreateEnvelopeInput {

    @Field(() => AnimeBroadcastCreateInput, {nullable:true})
    @Type(() => AnimeBroadcastCreateInput)
    set?: AnimeBroadcastCreateInput;
}
