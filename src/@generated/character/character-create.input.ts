import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterNameCreateEnvelopeInput } from '../character-name/character-name-create-envelope.input';
import { ImageCreateEnvelopeInput } from '../image/image-create-envelope.input';
import { DescriptionCreateEnvelopeInput } from '../description/description-create-envelope.input';
import { CharacterOnAnimeCreateNestedManyWithoutCharacterInput } from '../character-on-anime/character-on-anime-create-nested-many-without-character.input';

@InputType()
export class CharacterCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => CharacterNameCreateEnvelopeInput, {nullable:false})
    name!: CharacterNameCreateEnvelopeInput;

    @Field(() => ImageCreateEnvelopeInput, {nullable:false})
    image!: ImageCreateEnvelopeInput;

    @Field(() => DescriptionCreateEnvelopeInput, {nullable:false})
    description!: DescriptionCreateEnvelopeInput;

    @Field(() => CharacterOnAnimeCreateNestedManyWithoutCharacterInput, {nullable:true})
    anime?: CharacterOnAnimeCreateNestedManyWithoutCharacterInput;
}
