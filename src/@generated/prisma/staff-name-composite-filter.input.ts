import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffNameObjectEqualityInput } from './staff-name-object-equality.input';
import { StaffNameWhereInput } from '../staff-name/staff-name-where.input';

@InputType()
export class StaffNameCompositeFilter {

    @Field(() => StaffNameObjectEqualityInput, {nullable:true})
    equals?: StaffNameObjectEqualityInput;

    @Field(() => StaffNameWhereInput, {nullable:true})
    is?: StaffNameWhereInput;

    @Field(() => StaffNameWhereInput, {nullable:true})
    isNot?: StaffNameWhereInput;
}
