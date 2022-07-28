import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateWithoutVoiceActorInput } from './character-on-anime-create-without-voice-actor.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput } from './character-on-anime-create-or-connect-without-voice-actor.input';
import { CharacterOnAnimeCreateManyVoiceActorInputEnvelope } from './character-on-anime-create-many-voice-actor-input-envelope.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';

@InputType()
export class CharacterOnAnimeUncheckedCreateNestedManyWithoutVoiceActorInput {

    @Field(() => [CharacterOnAnimeCreateWithoutVoiceActorInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateWithoutVoiceActorInput)
    create?: Array<CharacterOnAnimeCreateWithoutVoiceActorInput>;

    @Field(() => [CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput)
    connectOrCreate?: Array<CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput>;

    @Field(() => CharacterOnAnimeCreateManyVoiceActorInputEnvelope, {nullable:true})
    @Type(() => CharacterOnAnimeCreateManyVoiceActorInputEnvelope)
    createMany?: CharacterOnAnimeCreateManyVoiceActorInputEnvelope;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    connect?: Array<CharacterOnAnimeWhereUniqueInput>;
}
