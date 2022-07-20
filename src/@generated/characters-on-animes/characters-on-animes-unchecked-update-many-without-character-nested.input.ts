import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateWithoutCharacterInput } from './characters-on-animes-create-without-character.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateOrConnectWithoutCharacterInput } from './characters-on-animes-create-or-connect-without-character.input';
import { CharactersOnAnimesUpsertWithWhereUniqueWithoutCharacterInput } from './characters-on-animes-upsert-with-where-unique-without-character.input';
import { CharactersOnAnimesCreateManyCharacterInputEnvelope } from './characters-on-animes-create-many-character-input-envelope.input';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { CharactersOnAnimesUpdateWithWhereUniqueWithoutCharacterInput } from './characters-on-animes-update-with-where-unique-without-character.input';
import { CharactersOnAnimesUpdateManyWithWhereWithoutCharacterInput } from './characters-on-animes-update-many-with-where-without-character.input';
import { CharactersOnAnimesScalarWhereInput } from './characters-on-animes-scalar-where.input';

@InputType()
export class CharactersOnAnimesUncheckedUpdateManyWithoutCharacterNestedInput {

    @Field(() => [CharactersOnAnimesCreateWithoutCharacterInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateWithoutCharacterInput)
    create?: Array<CharactersOnAnimesCreateWithoutCharacterInput>;

    @Field(() => [CharactersOnAnimesCreateOrConnectWithoutCharacterInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateOrConnectWithoutCharacterInput)
    connectOrCreate?: Array<CharactersOnAnimesCreateOrConnectWithoutCharacterInput>;

    @Field(() => [CharactersOnAnimesUpsertWithWhereUniqueWithoutCharacterInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpsertWithWhereUniqueWithoutCharacterInput)
    upsert?: Array<CharactersOnAnimesUpsertWithWhereUniqueWithoutCharacterInput>;

    @Field(() => CharactersOnAnimesCreateManyCharacterInputEnvelope, {nullable:true})
    @Type(() => CharactersOnAnimesCreateManyCharacterInputEnvelope)
    createMany?: CharactersOnAnimesCreateManyCharacterInputEnvelope;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    set?: Array<CharactersOnAnimesWhereUniqueInput>;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    disconnect?: Array<CharactersOnAnimesWhereUniqueInput>;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    delete?: Array<CharactersOnAnimesWhereUniqueInput>;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    connect?: Array<CharactersOnAnimesWhereUniqueInput>;

    @Field(() => [CharactersOnAnimesUpdateWithWhereUniqueWithoutCharacterInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpdateWithWhereUniqueWithoutCharacterInput)
    update?: Array<CharactersOnAnimesUpdateWithWhereUniqueWithoutCharacterInput>;

    @Field(() => [CharactersOnAnimesUpdateManyWithWhereWithoutCharacterInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpdateManyWithWhereWithoutCharacterInput)
    updateMany?: Array<CharactersOnAnimesUpdateManyWithWhereWithoutCharacterInput>;

    @Field(() => [CharactersOnAnimesScalarWhereInput], {nullable:true})
    @Type(() => CharactersOnAnimesScalarWhereInput)
    deleteMany?: Array<CharactersOnAnimesScalarWhereInput>;
}
