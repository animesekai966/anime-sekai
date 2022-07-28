import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateWithoutVoiceActorInput } from './character-on-anime-create-without-voice-actor.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput } from './character-on-anime-create-or-connect-without-voice-actor.input';
import { CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorInput } from './character-on-anime-upsert-with-where-unique-without-voice-actor.input';
import { CharacterOnAnimeCreateManyVoiceActorInputEnvelope } from './character-on-anime-create-many-voice-actor-input-envelope.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorInput } from './character-on-anime-update-with-where-unique-without-voice-actor.input';
import { CharacterOnAnimeUpdateManyWithWhereWithoutVoiceActorInput } from './character-on-anime-update-many-with-where-without-voice-actor.input';
import { CharacterOnAnimeScalarWhereInput } from './character-on-anime-scalar-where.input';

@InputType()
export class CharacterOnAnimeUpdateManyWithoutVoiceActorNestedInput {

    @Field(() => [CharacterOnAnimeCreateWithoutVoiceActorInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateWithoutVoiceActorInput)
    create?: Array<CharacterOnAnimeCreateWithoutVoiceActorInput>;

    @Field(() => [CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput)
    connectOrCreate?: Array<CharacterOnAnimeCreateOrConnectWithoutVoiceActorInput>;

    @Field(() => [CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorInput)
    upsert?: Array<CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorInput>;

    @Field(() => CharacterOnAnimeCreateManyVoiceActorInputEnvelope, {nullable:true})
    @Type(() => CharacterOnAnimeCreateManyVoiceActorInputEnvelope)
    createMany?: CharacterOnAnimeCreateManyVoiceActorInputEnvelope;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    set?: Array<CharacterOnAnimeWhereUniqueInput>;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    disconnect?: Array<CharacterOnAnimeWhereUniqueInput>;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    delete?: Array<CharacterOnAnimeWhereUniqueInput>;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    connect?: Array<CharacterOnAnimeWhereUniqueInput>;

    @Field(() => [CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorInput)
    update?: Array<CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorInput>;

    @Field(() => [CharacterOnAnimeUpdateManyWithWhereWithoutVoiceActorInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpdateManyWithWhereWithoutVoiceActorInput)
    updateMany?: Array<CharacterOnAnimeUpdateManyWithWhereWithoutVoiceActorInput>;

    @Field(() => [CharacterOnAnimeScalarWhereInput], {nullable:true})
    @Type(() => CharacterOnAnimeScalarWhereInput)
    deleteMany?: Array<CharacterOnAnimeScalarWhereInput>;
}
