import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffNameCreateEnvelopeInput } from '../staff-name/staff-name-create-envelope.input';
import { ImageCreateEnvelopeInput } from '../image/image-create-envelope.input';
import { DescriptionCreateEnvelopeInput } from '../description/description-create-envelope.input';
import { CharacterOnAnimeUncheckedCreateNestedManyWithoutVoiceActorInput } from '../character-on-anime/character-on-anime-unchecked-create-nested-many-without-voice-actor.input';
import { StaffOnAnimeUncheckedCreateNestedManyWithoutStaffInput } from '../staff-on-anime/staff-on-anime-unchecked-create-nested-many-without-staff.input';

@InputType()
export class StaffUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => StaffNameCreateEnvelopeInput, {nullable:false})
    name!: StaffNameCreateEnvelopeInput;

    @Field(() => ImageCreateEnvelopeInput, {nullable:false})
    image!: ImageCreateEnvelopeInput;

    @Field(() => String, {nullable:false})
    info!: string;

    @Field(() => DescriptionCreateEnvelopeInput, {nullable:false})
    description!: DescriptionCreateEnvelopeInput;

    @Field(() => CharacterOnAnimeUncheckedCreateNestedManyWithoutVoiceActorInput, {nullable:true})
    characters?: CharacterOnAnimeUncheckedCreateNestedManyWithoutVoiceActorInput;

    @Field(() => StaffOnAnimeUncheckedCreateNestedManyWithoutStaffInput, {nullable:true})
    animeRoles?: StaffOnAnimeUncheckedCreateNestedManyWithoutStaffInput;
}
