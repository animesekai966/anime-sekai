import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeBroadcastObjectEqualityInput } from './anime-broadcast-object-equality.input';
import { AnimeBroadcastWhereInput } from '../anime-broadcast/anime-broadcast-where.input';

@InputType()
export class AnimeBroadcastCompositeFilter {

    @Field(() => AnimeBroadcastObjectEqualityInput, {nullable:true})
    equals?: AnimeBroadcastObjectEqualityInput;

    @Field(() => AnimeBroadcastWhereInput, {nullable:true})
    is?: AnimeBroadcastWhereInput;

    @Field(() => AnimeBroadcastWhereInput, {nullable:true})
    isNot?: AnimeBroadcastWhereInput;
}
