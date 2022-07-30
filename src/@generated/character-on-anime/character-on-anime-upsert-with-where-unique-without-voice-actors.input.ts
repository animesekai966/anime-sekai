import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateWithoutVoiceActorsInput } from './character-on-anime-update-without-voice-actors.input';
import { CharacterOnAnimeCreateWithoutVoiceActorsInput } from './character-on-anime-create-without-voice-actors.input';

@InputType()
export class CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorsInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeUpdateWithoutVoiceActorsInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateWithoutVoiceActorsInput)
    update!: CharacterOnAnimeUpdateWithoutVoiceActorsInput;

    @Field(() => CharacterOnAnimeCreateWithoutVoiceActorsInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateWithoutVoiceActorsInput)
    create!: CharacterOnAnimeCreateWithoutVoiceActorsInput;
}
