import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateWithoutCharacterInput } from './character-on-anime-create-without-character.input';

@InputType()
export class CharacterOnAnimeCreateOrConnectWithoutCharacterInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeCreateWithoutCharacterInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateWithoutCharacterInput)
    create!: CharacterOnAnimeCreateWithoutCharacterInput;
}
