import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesUpdateWithoutCharacterInput } from './characters-on-animes-update-without-character.input';
import { CharactersOnAnimesCreateWithoutCharacterInput } from './characters-on-animes-create-without-character.input';

@InputType()
export class CharactersOnAnimesUpsertWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesUpdateWithoutCharacterInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateWithoutCharacterInput)
    update!: CharactersOnAnimesUpdateWithoutCharacterInput;

    @Field(() => CharactersOnAnimesCreateWithoutCharacterInput, {nullable:false})
    @Type(() => CharactersOnAnimesCreateWithoutCharacterInput)
    create!: CharactersOnAnimesCreateWithoutCharacterInput;
}
