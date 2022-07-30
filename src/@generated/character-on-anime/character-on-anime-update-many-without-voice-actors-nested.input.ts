import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateWithoutVoiceActorsInput } from './character-on-anime-create-without-voice-actors.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput } from './character-on-anime-create-or-connect-without-voice-actors.input';
import { CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorsInput } from './character-on-anime-upsert-with-where-unique-without-voice-actors.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorsInput } from './character-on-anime-update-with-where-unique-without-voice-actors.input';
import { CharacterOnAnimeUpdateManyWithWhereWithoutVoiceActorsInput } from './character-on-anime-update-many-with-where-without-voice-actors.input';
import { CharacterOnAnimeScalarWhereInput } from './character-on-anime-scalar-where.input';

@InputType()
export class CharacterOnAnimeUpdateManyWithoutVoiceActorsNestedInput {

    @Field(() => [CharacterOnAnimeCreateWithoutVoiceActorsInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateWithoutVoiceActorsInput)
    create?: Array<CharacterOnAnimeCreateWithoutVoiceActorsInput>;

    @Field(() => [CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput)
    connectOrCreate?: Array<CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput>;

    @Field(() => [CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorsInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorsInput)
    upsert?: Array<CharacterOnAnimeUpsertWithWhereUniqueWithoutVoiceActorsInput>;

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

    @Field(() => [CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorsInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorsInput)
    update?: Array<CharacterOnAnimeUpdateWithWhereUniqueWithoutVoiceActorsInput>;

    @Field(() => [CharacterOnAnimeUpdateManyWithWhereWithoutVoiceActorsInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpdateManyWithWhereWithoutVoiceActorsInput)
    updateMany?: Array<CharacterOnAnimeUpdateManyWithWhereWithoutVoiceActorsInput>;

    @Field(() => [CharacterOnAnimeScalarWhereInput], {nullable:true})
    @Type(() => CharacterOnAnimeScalarWhereInput)
    deleteMany?: Array<CharacterOnAnimeScalarWhereInput>;
}
