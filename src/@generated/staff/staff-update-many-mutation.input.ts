import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StaffImageUpdateEnvelopeInput } from '../staff-image/staff-image-update-envelope.input';
import { StaffNameUpdateEnvelopeInput } from '../staff-name/staff-name-update-envelope.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StaffUpdateyearsActiveInput } from './staff-updateyears-active.input';
import { StaffUpdatehomeTownInput } from './staff-updatehome-town.input';
import { FuzzyDateUpdateEnvelopeInput } from '../fuzzy-date/fuzzy-date-update-envelope.input';

@InputType()
export class StaffUpdateManyMutationInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    malId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    language?: StringFieldUpdateOperationsInput;

    @Field(() => StaffImageUpdateEnvelopeInput, {nullable:true})
    image?: StaffImageUpdateEnvelopeInput;

    @Field(() => StaffNameUpdateEnvelopeInput, {nullable:true})
    name?: StaffNameUpdateEnvelopeInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    age?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StaffUpdateyearsActiveInput, {nullable:true})
    yearsActive?: StaffUpdateyearsActiveInput;

    @Field(() => StaffUpdatehomeTownInput, {nullable:true})
    homeTown?: StaffUpdatehomeTownInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bloodType?: StringFieldUpdateOperationsInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    dateOfBirth?: FuzzyDateUpdateEnvelopeInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    dateOfDeath?: FuzzyDateUpdateEnvelopeInput;
}
