import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateManyVoiceActorInput } from './character-on-anime-create-many-voice-actor.input';
import { Type } from 'class-transformer';

@InputType()
export class CharacterOnAnimeCreateManyVoiceActorInputEnvelope {

    @Field(() => [CharacterOnAnimeCreateManyVoiceActorInput], {nullable:false})
    @Type(() => CharacterOnAnimeCreateManyVoiceActorInput)
    data!: Array<CharacterOnAnimeCreateManyVoiceActorInput>;
}
