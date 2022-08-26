import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StaffNameUpdateEnvelopeInput } from '../staff-name/staff-name-update-envelope.input';
import { ImageUpdateEnvelopeInput } from '../image/image-update-envelope.input';
import { DescriptionUpdateEnvelopeInput } from '../description/description-update-envelope.input';
import { CharacterOnAnimeUpdateManyWithoutVoiceActorsNestedInput } from '../character-on-anime/character-on-anime-update-many-without-voice-actors-nested.input';
import { StaffOnAnimeUpdateManyWithoutStaffNestedInput } from '../staff-on-anime/staff-on-anime-update-many-without-staff-nested.input';
import { StaffUpdatecharacterIDsInput } from './staff-updatecharacter-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StaffUpdateInput {

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    malId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StaffNameUpdateEnvelopeInput, {nullable:true})
    name?: StaffNameUpdateEnvelopeInput;

    @Field(() => ImageUpdateEnvelopeInput, {nullable:true})
    image?: ImageUpdateEnvelopeInput;

    @Field(() => DescriptionUpdateEnvelopeInput, {nullable:true})
    description?: DescriptionUpdateEnvelopeInput;

    @Field(() => CharacterOnAnimeUpdateManyWithoutVoiceActorsNestedInput, {nullable:true})
    characters?: CharacterOnAnimeUpdateManyWithoutVoiceActorsNestedInput;

    @Field(() => StaffOnAnimeUpdateManyWithoutStaffNestedInput, {nullable:true})
    animeRoles?: StaffOnAnimeUpdateManyWithoutStaffNestedInput;

    @HideField()
    characterIDs?: StaffUpdatecharacterIDsInput;
}
