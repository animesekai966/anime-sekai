import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerQuailty } from './server-quailty.enum';

@InputType()
export class NestedEnumServerQuailtyFilter {

    @Field(() => ServerQuailty, {nullable:true})
    equals?: keyof typeof ServerQuailty;

    @Field(() => [ServerQuailty], {nullable:true})
    in?: Array<keyof typeof ServerQuailty>;

    @Field(() => [ServerQuailty], {nullable:true})
    notIn?: Array<keyof typeof ServerQuailty>;

    @Field(() => NestedEnumServerQuailtyFilter, {nullable:true})
    not?: NestedEnumServerQuailtyFilter;
}
