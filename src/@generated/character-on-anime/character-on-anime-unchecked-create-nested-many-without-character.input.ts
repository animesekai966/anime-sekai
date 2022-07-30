import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateWithoutCharacterInput } from './character-on-anime-create-without-character.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateOrConnectWithoutCharacterInput } from './character-on-anime-create-or-connect-without-character.input';
import { CharacterOnAnimeCreateManyCharacterInputEnvelope } from './character-on-anime-create-many-character-input-envelope.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';

@InputType()
export class CharacterOnAnimeUncheckedCreateNestedManyWithoutCharacterInput {

    @Field(() => [CharacterOnAnimeCreateWithoutCharacterInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateWithoutCharacterInput)
    create?: Array<CharacterOnAnimeCreateWithoutCharacterInput>;

    @Field(() => [CharacterOnAnimeCreateOrConnectWithoutCharacterInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateOrConnectWithoutCharacterInput)
    connectOrCreate?: Array<CharacterOnAnimeCreateOrConnectWithoutCharacterInput>;

    @Field(() => CharacterOnAnimeCreateManyCharacterInputEnvelope, {nullable:true})
    @Type(() => CharacterOnAnimeCreateManyCharacterInputEnvelope)
    createMany?: CharacterOnAnimeCreateManyCharacterInputEnvelope;

    @Field(() => [CharacterOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => CharacterOnAnimeWhereUniqueInput)
    connect?: Array<CharacterOnAnimeWhereUniqueInput>;
}
