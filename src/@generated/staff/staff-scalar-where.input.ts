import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @HideField()
    characterIDs?: StringNullableListFilter;
}
