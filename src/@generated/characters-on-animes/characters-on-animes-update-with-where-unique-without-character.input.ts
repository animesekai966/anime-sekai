import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesUpdateWithoutCharacterInput } from './characters-on-animes-update-without-character.input';

@InputType()
export class CharactersOnAnimesUpdateWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesUpdateWithoutCharacterInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateWithoutCharacterInput)
    data!: CharactersOnAnimesUpdateWithoutCharacterInput;
}
