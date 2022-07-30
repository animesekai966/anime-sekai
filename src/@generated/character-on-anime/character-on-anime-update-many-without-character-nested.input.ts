import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterOnAnimeCreateWithoutCharacterInput } from './character-on-anime-create-without-character.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeCreateOrConnectWithoutCharacterInput } from './character-on-anime-create-or-connect-without-character.input';
import { CharacterOnAnimeUpsertWithWhereUniqueWithoutCharacterInput } from './character-on-anime-upsert-with-where-unique-without-character.input';
import { CharacterOnAnimeCreateManyCharacterInputEnvelope } from './character-on-anime-create-many-character-input-envelope.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { CharacterOnAnimeUpdateWithWhereUniqueWithoutCharacterInput } from './character-on-anime-update-with-where-unique-without-character.input';
import { CharacterOnAnimeUpdateManyWithWhereWithoutCharacterInput } from './character-on-anime-update-many-with-where-without-character.input';
import { CharacterOnAnimeScalarWhereInput } from './character-on-anime-scalar-where.input';

@InputType()
export class CharacterOnAnimeUpdateManyWithoutCharacterNestedInput {

    @Field(() => [CharacterOnAnimeCreateWithoutCharacterInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateWithoutCharacterInput)
    create?: Array<CharacterOnAnimeCreateWithoutCharacterInput>;

    @Field(() => [CharacterOnAnimeCreateOrConnectWithoutCharacterInput], {nullable:true})
    @Type(() => CharacterOnAnimeCreateOrConnectWithoutCharacterInput)
    connectOrCreate?: Array<CharacterOnAnimeCreateOrConnectWithoutCharacterInput>;

    @Field(() => [CharacterOnAnimeUpsertWithWhereUniqueWithoutCharacterInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpsertWithWhereUniqueWithoutCharacterInput)
    upsert?: Array<CharacterOnAnimeUpsertWithWhereUniqueWithoutCharacterInput>;

    @Field(() => CharacterOnAnimeCreateManyCharacterInputEnvelope, {nullable:true})
    @Type(() => CharacterOnAnimeCreateManyCharacterInputEnvelope)
    createMany?: CharacterOnAnimeCreateManyCharacterInputEnvelope;

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

    @Field(() => [CharacterOnAnimeUpdateWithWhereUniqueWithoutCharacterInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpdateWithWhereUniqueWithoutCharacterInput)
    update?: Array<CharacterOnAnimeUpdateWithWhereUniqueWithoutCharacterInput>;

    @Field(() => [CharacterOnAnimeUpdateManyWithWhereWithoutCharacterInput], {nullable:true})
    @Type(() => CharacterOnAnimeUpdateManyWithWhereWithoutCharacterInput)
    updateMany?: Array<CharacterOnAnimeUpdateManyWithWhereWithoutCharacterInput>;

    @Field(() => [CharacterOnAnimeScalarWhereInput], {nullable:true})
    @Type(() => CharacterOnAnimeScalarWhereInput)
    deleteMany?: Array<CharacterOnAnimeScalarWhereInput>;
}
