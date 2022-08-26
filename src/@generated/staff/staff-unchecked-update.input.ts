import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StaffNameUpdateEnvelopeInput } from '../staff-name/staff-name-update-envelope.input';
import { ImageUpdateEnvelopeInput } from '../image/image-update-envelope.input';
import { DescriptionUpdateEnvelopeInput } from '../description/description-update-envelope.input';
import { CharacterOnAnimeUncheckedUpdateManyWithoutVoiceActorsNestedInput } from '../character-on-anime/character-on-anime-unchecked-update-many-without-voice-actors-nested.input';
import { StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput } from '../staff-on-anime/staff-on-anime-unchecked-update-many-without-staff-nested.input';
import { StaffUpdatecharacterIDsInput } from './staff-updatecharacter-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StaffUncheckedUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    malId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StaffNameUpdateEnvelopeInput, {nullable:true})
    name?: StaffNameUpdateEnvelopeInput;

    @Field(() => ImageUpdateEnvelopeInput, {nullable:true})
    image?: ImageUpdateEnvelopeInput;

    @Field(() => DescriptionUpdateEnvelopeInput, {nullable:true})
    description?: DescriptionUpdateEnvelopeInput;

    @Field(() => CharacterOnAnimeUncheckedUpdateManyWithoutVoiceActorsNestedInput, {nullable:true})
    characters?: CharacterOnAnimeUncheckedUpdateManyWithoutVoiceActorsNestedInput;

    @Field(() => StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput, {nullable:true})
    animeRoles?: StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput;

    @HideField()
    characterIDs?: StaffUpdatecharacterIDsInput;
}
