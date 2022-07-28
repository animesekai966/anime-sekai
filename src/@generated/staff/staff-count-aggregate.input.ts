import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StaffCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    malId?: true;

    @Field(() => Boolean, {nullable:true})
    anilistId?: true;

    @Field(() => Boolean, {nullable:true})
    info?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
