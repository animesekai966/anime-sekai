import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeUpdateWithoutVoiceActorInput } from './character-on-anime-update-without-voice-actor.input';
import { CharacterOnAnimeCreateWithoutVoiceActorInput } from './character-on-anime-create-without-voice-actor.input';

@InputType()
export class CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeUpdateWithoutVoiceActorInput, {nullable:false})
    @Type(() => CharacterOnAnimeUpdateWithoutVoiceActorInput)
    update!: CharacterOnAnimeUpdateWithoutVoiceActorInput;

    @Field(() => CharacterOnAnimeCreateWithoutVoiceActorInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateWithoutVoiceActorInput)
    create!: CharacterOnAnimeCreateWithoutVoiceActorInput;
}
