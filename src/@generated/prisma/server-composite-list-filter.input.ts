import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ServerObjectEqualityInput } from './server-object-equality.input';
import { ServerWhereInput } from '../server/server-where.input';

@InputType()
export class ServerCompositeListFilter {

    @Field(() => [ServerObjectEqualityInput], {nullable:true})
    equals?: Array<ServerObjectEqualityInput>;

    @Field(() => ServerWhereInput, {nullable:true})
    every?: ServerWhereInput;

    @Field(() => ServerWhereInput, {nullable:true})
    some?: ServerWhereInput;

    @Field(() => ServerWhereInput, {nullable:true})
    none?: ServerWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
