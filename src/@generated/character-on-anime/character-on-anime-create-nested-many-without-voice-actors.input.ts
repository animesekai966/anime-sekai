import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateWithoutVoiceActorsInput } from './character-on-anime-create-without-voice-actors.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput } from './character-on-anime-create-or-connect-without-voice-actors.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';

@InputType()
export class CharacterOnAnimeCreateNestedManyWithoutVoiceActorsInput {

    @Field(() => [CharacterOnAnimeCreateWithoutVoiceActorsInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateWithoutVoiceActorsInput)
    create?: Array<CharacterOnAnimeCreateWithoutVoiceActorsInput>;

    @Field(() => [CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput)
    connectOrCreate?: Array<CharacterOnAnimeCreateOrConnectWithoutVoiceActorsInput>;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    connect?: Array<CharacterOnAnimeWhereUniqueInput>;
}
