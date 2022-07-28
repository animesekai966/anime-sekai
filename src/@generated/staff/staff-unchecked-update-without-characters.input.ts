import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StaffNameUpdateEnvelopeInput } from '../staff-name/staff-name-update-envelope.input';
import { ImageUpdateEnvelopeInput } from '../image/image-update-envelope.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { DescriptionUpdateEnvelopeInput } from '../description/description-update-envelope.input';
import { StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput } from '../staff-on-anime/staff-on-anime-unchecked-update-many-without-staff-nested.input';

@InputType()
export class StaffUncheckedUpdateWithoutCharactersInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    malId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StaffNameUpdateEnvelopeInput, {nullable:true})
    name?: StaffNameUpdateEnvelopeInput;

    @Field(() => ImageUpdateEnvelopeInput, {nullable:true})
    image?: ImageUpdateEnvelopeInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    info?: StringFieldUpdateOperationsInput;

    @Field(() => DescriptionUpdateEnvelopeInput, {nullable:true})
    description?: DescriptionUpdateEnvelopeInput;

    @Field(() => StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput, {nullable:true})
    animeRoles?: StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput;
}
