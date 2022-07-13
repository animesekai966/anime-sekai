import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class FuzzyDateWhereInput {

    @Field(() => [FuzzyDateWhereInput], {nullable:true})
    AND?: Array<FuzzyDateWhereInput>;

    @Field(() => [FuzzyDateWhereInput], {nullable:true})
    OR?: Array<FuzzyDateWhereInput>;

    @Field(() => [FuzzyDateWhereInput], {nullable:true})
    NOT?: Array<FuzzyDateWhereInput>;

    @Field(() => IntNullableFilter, {nullable:true})
    year?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    month?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    day?: IntNullableFilter;
}
