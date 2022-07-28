import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DescriptionObjectEqualityInput } from './description-object-equality.input';
import { DescriptionWhereInput } from '../description/description-where.input';

@InputType()
export class DescriptionCompositeFilter {

    @Field(() => DescriptionObjectEqualityInput, {nullable:true})
    equals?: DescriptionObjectEqualityInput;

    @Field(() => DescriptionWhereInput, {nullable:true})
    is?: DescriptionWhereInput;

    @Field(() => DescriptionWhereInput, {nullable:true})
    isNot?: DescriptionWhereInput;
}
