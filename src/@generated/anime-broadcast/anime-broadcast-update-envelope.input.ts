import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastCreateInput } from './anime-broadcast-create.input';
import { Type } from 'class-transformer';
import { AnimeBroadcastUpdateInput } from './anime-broadcast-update.input';

@InputType()
export class AnimeBroadcastUpdateEnvelopeInput {

    @Field(() => AnimeBroadcastCreateInput, {nullable:true})
    @Type(() => AnimeBroadcastCreateInput)
    set?: AnimeBroadcastCreateInput;

    @Field(() => AnimeBroadcastUpdateInput, {nullable:true})
    @Type(() => AnimeBroadcastUpdateInput)
    update?: AnimeBroadcastUpdateInput;
}
