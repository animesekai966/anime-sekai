import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateWithoutVoiceActorInput } from './character-on-anime-create-without-voice-actor.input';

@InputType()
export class CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeCreateWithoutVoiceActorInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateWithoutVoiceActorInput)
    create!: CharacterOnAnimeCreateWithoutVoiceActorInput;
}
