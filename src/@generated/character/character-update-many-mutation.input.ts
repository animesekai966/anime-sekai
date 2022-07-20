import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { CharacterNameUpdateEnvelopeInput } from '../character-name/character-name-update-envelope.input';
import { CharacterImageUpdateEnvelopeInput } from '../character-image/character-image-update-envelope.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { FuzzyDateUpdateEnvelopeInput } from '../fuzzy-date/fuzzy-date-update-envelope.input';

@InputType()
export class CharacterUpdateManyMutationInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    malId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => CharacterNameUpdateEnvelopeInput, {nullable:true})
    name?: CharacterNameUpdateEnvelopeInput;

    @Field(() => CharacterImageUpdateEnvelopeInput, {nullable:true})
    image?: CharacterImageUpdateEnvelopeInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    age?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    gender?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bloodType?: NullableStringFieldUpdateOperationsInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    dateOfBirth?: FuzzyDateUpdateEnvelopeInput;
}
