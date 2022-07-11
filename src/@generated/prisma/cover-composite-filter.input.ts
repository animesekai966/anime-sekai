import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CoverObjectEqualityInput } from './cover-object-equality.input';
import { CoverWhereInput } from '../cover/cover-where.input';

@InputType()
export class CoverCompositeFilter {

    @Field(() => CoverObjectEqualityInput, {nullable:true})
    equals?: CoverObjectEqualityInput;

    @Field(() => CoverWhereInput, {nullable:true})
    is?: CoverWhereInput;

    @Field(() => CoverWhereInput, {nullable:true})
    isNot?: CoverWhereInput;
}
