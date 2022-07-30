import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { StaffNameCreateEnvelopeInput } from '../staff-name/staff-name-create-envelope.input';
import { ImageCreateEnvelopeInput } from '../image/image-create-envelope.input';
import { DescriptionCreateEnvelopeInput } from '../description/description-create-envelope.input';
import { CharacterOnAnimeUncheckedCreateNestedManyWithoutVoiceActorsInput } from '../character-on-anime/character-on-anime-unchecked-create-nested-many-without-voice-actors.input';
import { StaffCreatecharacterIDsInput } from './staff-createcharacter-i-ds.input';

@InputType()
export class StaffUncheckedCreateWithoutAnimeRolesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => StaffNameCreateEnvelopeInput, {nullable:false})
    name!: StaffNameCreateEnvelopeInput;

    @Field(() => ImageCreateEnvelopeInput, {nullable:false})
    image!: ImageCreateEnvelopeInput;

    @Field(() => String, {nullable:true})
    info?: string;

    @Field(() => DescriptionCreateEnvelopeInput, {nullable:false})
    description!: DescriptionCreateEnvelopeInput;

    @Field(() => CharacterOnAnimeUncheckedCreateNestedManyWithoutVoiceActorsInput, {nullable:true})
    characters?: CharacterOnAnimeUncheckedCreateNestedManyWithoutVoiceActorsInput;

    @Field(() => StaffCreatecharacterIDsInput, {nullable:true})
    characterIDs?: StaffCreatecharacterIDsInput;
}
