import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateWithoutVoiceActorsInput } from './character-on-anime-update-without-voice-actors.input';

@InputType()
export class CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorsInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeUpdateWithoutVoiceActorsInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateWithoutVoiceActorsInput)
    data!: CharacterOnAnimeUpdateWithoutVoiceActorsInput;
}
