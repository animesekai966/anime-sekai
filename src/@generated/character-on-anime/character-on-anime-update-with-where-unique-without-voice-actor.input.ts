import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateWithoutVoiceActorInput } from './character-on-anime-update-without-voice-actor.input';

@InputType()
export class CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeUpdateWithoutVoiceActorInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateWithoutVoiceActorInput)
    data!: CharacterOnAnimeUpdateWithoutVoiceActorInput;
}
