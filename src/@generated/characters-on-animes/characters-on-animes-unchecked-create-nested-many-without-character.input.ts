import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateWithoutCharacterInput } from './characters-on-animes-create-without-character.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateOrConnectWithoutCharacterInput } from './characters-on-animes-create-or-connect-without-character.input';
import { CharactersOnAnimesCreateManyCharacterInputEnvelope } from './characters-on-animes-create-many-character-input-envelope.input';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';

@InputType()
export class CharactersOnAnimesUncheckedCreateNestedManyWithoutCharacterInput {

    @Field(() => [CharactersOnAnimesCreateWithoutCharacterInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateWithoutCharacterInput)
    create?: Array<CharactersOnAnimesCreateWithoutCharacterInput>;

    @Field(() => [CharactersOnAnimesCreateOrConnectWithoutCharacterInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateOrConnectWithoutCharacterInput)
    connectOrCreate?: Array<CharactersOnAnimesCreateOrConnectWithoutCharacterInput>;

    @Field(() => CharactersOnAnimesCreateManyCharacterInputEnvelope, {nullable:true})
    @Type(() => CharactersOnAnimesCreateManyCharacterInputEnvelope)
    createMany?: CharactersOnAnimesCreateManyCharacterInputEnvelope;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    connect?: Array<CharactersOnAnimesWhereUniqueInput>;
}
