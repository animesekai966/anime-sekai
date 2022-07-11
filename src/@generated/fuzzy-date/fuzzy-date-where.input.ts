import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class FuzzyDateWhereInput {

    @Field(() => [FuzzyDateWhereInput], {nullable:true})
    AND?: Array<FuzzyDateWhereInput>;

    @Field(() => [FuzzyDateWhereInput], {nullable:true})
    OR?: Array<FuzzyDateWhereInput>;

    @Field(() => [FuzzyDateWhereInput], {nullable:true})
    NOT?: Array<FuzzyDateWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    year?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    month?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    day?: IntNullableFilter;
}
