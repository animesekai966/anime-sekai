import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FuzzyDateObjectEqualityInput } from './fuzzy-date-object-equality.input';
import { FuzzyDateWhereInput } from '../fuzzy-date/fuzzy-date-where.input';

@InputType()
export class FuzzyDateCompositeFilter {

    @Field(() => FuzzyDateObjectEqualityInput, {nullable:true})
    equals?: FuzzyDateObjectEqualityInput;

    @Field(() => FuzzyDateWhereInput, {nullable:true})
    is?: FuzzyDateWhereInput;

    @Field(() => FuzzyDateWhereInput, {nullable:true})
    isNot?: FuzzyDateWhereInput;
}
