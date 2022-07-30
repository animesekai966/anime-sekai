import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateWithoutCharacterInput } from './character-on-anime-update-without-character.input';

@InputType()
export class CharacterOnAnimeUpdateWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeUpdateWithoutCharacterInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateWithoutCharacterInput)
    data!: CharacterOnAnimeUpdateWithoutCharacterInput;
}
