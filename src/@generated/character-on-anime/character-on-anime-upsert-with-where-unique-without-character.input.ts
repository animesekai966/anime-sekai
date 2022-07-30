import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateWithoutCharacterInput } from './character-on-anime-update-without-character.input';
import { CharacterOnAnimeCreateWithoutCharacterInput } from './character-on-anime-create-without-character.input';

@InputType()
export class CharacterOnAnimeUpsertWithWhereUniqueWithoutCharacterInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeUpdateWithoutCharacterInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateWithoutCharacterInput)
    update!: CharacterOnAnimeUpdateWithoutCharacterInput;

    @Field(() => CharacterOnAnimeCreateWithoutCharacterInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateWithoutCharacterInput)
    create!: CharacterOnAnimeCreateWithoutCharacterInput;
}
