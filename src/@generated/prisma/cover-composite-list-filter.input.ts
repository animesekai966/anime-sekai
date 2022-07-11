import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoverObjectEqualityInput } from './cover-object-equality.input';
import { CoverWhereInput } from '../cover/cover-where.input';

@InputType()
export class CoverCompositeListFilter {

    @Field(() => [CoverObjectEqualityInput], {nullable:true})
    equals?: Array<CoverObjectEqualityInput>;

    @Field(() => CoverWhereInput, {nullable:true})
    every?: CoverWhereInput;

    @Field(() => CoverWhereInput, {nullable:true})
    some?: CoverWhereInput;

    @Field(() => CoverWhereInput, {nullable:true})
    none?: CoverWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
