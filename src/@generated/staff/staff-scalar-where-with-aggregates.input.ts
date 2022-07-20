import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class StaffScalarWhereWithAggregatesInput {

    @Field(() => [StaffScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StaffScalarWhereWithAggregatesInput>;

    @Field(() => [StaffScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StaffScalarWhereWithAggregatesInput>;

    @Field(() => [StaffScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StaffScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    malId?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    anilistId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    language?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    age?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    gender?: StringNullableWithAggregatesFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    yearsActive?: IntNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    homeTown?: StringNullableListFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    bloodType?: StringWithAggregatesFilter;
}
