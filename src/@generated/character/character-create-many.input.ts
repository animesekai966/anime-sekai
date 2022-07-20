import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CharacterNameCreateEnvelopeInput } from '../character-name/character-name-create-envelope.input';
import { CharacterImageCreateEnvelopeInput } from '../character-image/character-image-create-envelope.input';
import { FuzzyDateCreateEnvelopeInput } from '../fuzzy-date/fuzzy-date-create-envelope.input';

@InputType()
export class CharacterCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => CharacterNameCreateEnvelopeInput, {nullable:false})
    name!: CharacterNameCreateEnvelopeInput;

    @Field(() => CharacterImageCreateEnvelopeInput, {nullable:false})
    image!: CharacterImageCreateEnvelopeInput;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    age?: string;

    @Field(() => String, {nullable:true})
    gender?: string;

    @Field(() => String, {nullable:true})
    bloodType?: string;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    dateOfBirth!: FuzzyDateCreateEnvelopeInput;
}
