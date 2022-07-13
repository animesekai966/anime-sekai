import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumBroadcastDaysNullableFilter } from '../prisma/enum-broadcast-days-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class AnimeBroadcastWhereInput {

    @Field(() => [AnimeBroadcastWhereInput], {nullable:true})
    AND?: Array<AnimeBroadcastWhereInput>;

    @Field(() => [AnimeBroadcastWhereInput], {nullable:true})
    OR?: Array<AnimeBroadcastWhereInput>;

    @Field(() => [AnimeBroadcastWhereInput], {nullable:true})
    NOT?: Array<AnimeBroadcastWhereInput>;

    @Field(() => EnumBroadcastDaysNullableFilter, {nullable:true})
    day?: EnumBroadcastDaysNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    time?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    timezone?: StringNullableFilter;
}
