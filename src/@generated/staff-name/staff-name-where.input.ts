import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class StaffNameWhereInput {

    @Field(() => [StaffNameWhereInput], {nullable:true})
    AND?: Array<StaffNameWhereInput>;

    @Field(() => [StaffNameWhereInput], {nullable:true})
    OR?: Array<StaffNameWhereInput>;

    @Field(() => [StaffNameWhereInput], {nullable:true})
    NOT?: Array<StaffNameWhereInput>;

    @Field(() => StringNullableFilter, {nullable:true})
    first?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    middle?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    last?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    full?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    native?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    alternative?: StringNullableListFilter;
}
