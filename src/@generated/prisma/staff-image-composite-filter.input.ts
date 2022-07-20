import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffImageObjectEqualityInput } from './staff-image-object-equality.input';
import { StaffImageWhereInput } from '../staff-image/staff-image-where.input';

@InputType()
export class StaffImageCompositeFilter {

    @Field(() => StaffImageObjectEqualityInput, {nullable:true})
    equals?: StaffImageObjectEqualityInput;

    @Field(() => StaffImageWhereInput, {nullable:true})
    is?: StaffImageWhereInput;

    @Field(() => StaffImageWhereInput, {nullable:true})
    isNot?: StaffImageWhereInput;
}
