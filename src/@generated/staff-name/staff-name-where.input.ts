import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
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

    @Field(() => StringFilter, {nullable:true})
    english?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    arabic?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    native?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    nativeFamily?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    alternates?: StringNullableListFilter;
}
