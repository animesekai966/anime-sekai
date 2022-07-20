import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffImageCreateEnvelopeInput } from '../staff-image/staff-image-create-envelope.input';
import { StaffNameCreateEnvelopeInput } from '../staff-name/staff-name-create-envelope.input';
import { StaffCreateyearsActiveInput } from './staff-createyears-active.input';
import { StaffCreatehomeTownInput } from './staff-createhome-town.input';
import { FuzzyDateCreateEnvelopeInput } from '../fuzzy-date/fuzzy-date-create-envelope.input';

@InputType()
export class StaffCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => String, {nullable:false})
    language!: string;

    @Field(() => StaffImageCreateEnvelopeInput, {nullable:false})
    image!: StaffImageCreateEnvelopeInput;

    @Field(() => StaffNameCreateEnvelopeInput, {nullable:false})
    name!: StaffNameCreateEnvelopeInput;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => StaffCreateyearsActiveInput, {nullable:true})
    yearsActive?: StaffCreateyearsActiveInput;

    @Field(() => StaffCreatehomeTownInput, {nullable:true})
    homeTown?: StaffCreatehomeTownInput;

    @Field(() => String, {nullable:false})
    bloodType!: string;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    dateOfBirth!: FuzzyDateCreateEnvelopeInput;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    dateOfDeath!: FuzzyDateCreateEnvelopeInput;
}
