import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StaffImageCompositeFilter } from '../prisma/staff-image-composite-filter.input';
import { StaffNameCompositeFilter } from '../prisma/staff-name-composite-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableListFilter } from '../prisma/int-nullable-list-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { FuzzyDateCompositeFilter } from '../prisma/fuzzy-date-composite-filter.input';
import { CharactersOnAnimesListRelationFilter } from '../characters-on-animes/characters-on-animes-list-relation-filter.input';

@InputType()
export class StaffWhereInput {

    @Field(() => [StaffWhereInput], {nullable:true})
    AND?: Array<StaffWhereInput>;

    @Field(() => [StaffWhereInput], {nullable:true})
    OR?: Array<StaffWhereInput>;

    @Field(() => [StaffWhereInput], {nullable:true})
    NOT?: Array<StaffWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    malId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    anilistId?: IntNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    language?: StringFilter;

    @Field(() => StaffImageCompositeFilter, {nullable:true})
    image?: StaffImageCompositeFilter;

    @Field(() => StaffNameCompositeFilter, {nullable:true})
    name?: StaffNameCompositeFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    age?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    gender?: StringNullableFilter;

    @Field(() => IntNullableListFilter, {nullable:true})
    yearsActive?: IntNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    homeTown?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    bloodType?: StringFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    dateOfBirth?: FuzzyDateCompositeFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    dateOfDeath?: FuzzyDateCompositeFilter;

    @Field(() => CharactersOnAnimesListRelationFilter, {nullable:true})
    animes?: CharactersOnAnimesListRelationFilter;
}
