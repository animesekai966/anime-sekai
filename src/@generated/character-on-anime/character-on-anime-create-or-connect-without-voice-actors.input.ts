import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateWithoutVoiceActorsInput } from './character-on-anime-create-without-voice-actors.input';

@InputType()
export class CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput {

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    where!: CharacterOnAnimeWhereUniqueInput;

    @Field(() => CharacterOnAnimeCreateWithoutVoiceActorsInput, {nullable:false})
    @Type(() => CharacterOnAnimeCreateWithoutVoiceActorsInput)
    create!: CharacterOnAnimeCreateWithoutVoiceActorsInput;
}
