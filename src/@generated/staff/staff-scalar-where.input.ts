import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class StaffScalarWhereInput {

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    AND?: Array<StaffScalarWhereInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    OR?: Array<StaffScalarWhereInput>;

    @Field(() => [StaffScalarWhereInput], {nullable:true})
    NOT?: Array<StaffScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    malId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    info?: StringNullableFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    characterIDs?: StringNullableListFilter;
}