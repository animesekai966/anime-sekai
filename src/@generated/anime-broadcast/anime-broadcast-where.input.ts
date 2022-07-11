import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumBroadcastDaysFilter } from '../prisma/enum-broadcast-days-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class AnimeBroadcastWhereInput {

    @Field(() => [AnimeBroadcastWhereInput], {nullable:true})
    AND?: Array<AnimeBroadcastWhereInput>;

    @Field(() => [AnimeBroadcastWhereInput], {nullable:true})
    OR?: Array<AnimeBroadcastWhereInput>;

    @Field(() => [AnimeBroadcastWhereInput], {nullable:true})
    NOT?: Array<AnimeBroadcastWhereInput>;

    @Field(() => EnumBroadcastDaysFilter, {nullable:true})
    day?: EnumBroadcastDaysFilter;

    @Field(() => StringFilter, {nullable:true})
    time?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    timezone?: StringFilter;
}
