import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StaffNameUpdateEnvelopeInput } from '../staff-name/staff-name-update-envelope.input';
import { ImageUpdateEnvelopeInput } from '../image/image-update-envelope.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { DescriptionUpdateEnvelopeInput } from '../description/description-update-envelope.input';
import { StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput } from '../staff-on-anime/staff-on-anime-unchecked-update-many-without-staff-nested.input';
import { StaffUpdatecharacterIDsInput } from './staff-updatecharacter-i-ds.input';

@InputType()
export class StaffUncheckedUpdateWithoutCharactersInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    malId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StaffNameUpdateEnvelopeInput, {nullable:true})
    name?: StaffNameUpdateEnvelopeInput;

    @Field(() => ImageUpdateEnvelopeInput, {nullable:true})
    image?: ImageUpdateEnvelopeInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    info?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DescriptionUpdateEnvelopeInput, {nullable:true})
    description?: DescriptionUpdateEnvelopeInput;

    @Field(() => StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput, {nullable:true})
    animeRoles?: StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput;

    @Field(() => StaffUpdatecharacterIDsInput, {nullable:true})
    characterIDs?: StaffUpdatecharacterIDsInput;
}