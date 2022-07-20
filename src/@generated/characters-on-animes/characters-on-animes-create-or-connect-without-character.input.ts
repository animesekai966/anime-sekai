import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateWithoutCharacterInput } from './characters-on-animes-create-without-character.input';

@InputType()
export class CharactersOnAnimesCreateOrConnectWithoutCharacterInput {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesCreateWithoutCharacterInput, {nullable:false})
    @Type(() => CharactersOnAnimesCreateWithoutCharacterInput)
    create!: CharactersOnAnimesCreateWithoutCharacterInput;
}
