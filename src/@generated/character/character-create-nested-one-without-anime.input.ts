import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutAnimeInput } from './character-create-without-anime.input';
import { Type } from 'class-transformer';
import { CharacterCreateOrConnectWithoutAnimeInput } from './character-create-or-connect-without-anime.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';

@InputType()
export class CharacterCreateNestedOneWithoutAnimeInput {

    @Field(() => CharacterCreateWithoutAnimeInput, {nullable:true})
    @Type(() => CharacterCreateWithoutAnimeInput)
    create?: CharacterCreateWithoutAnimeInput;

    @Field(() => CharacterCreateOrConnectWithoutAnimeInput, {nullable:true})
    @Type(() => CharacterCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: CharacterCreateOrConnectWithoutAnimeInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    @Type(() => CharacterWhereUniqueInput)
    connect?: CharacterWhereUniqueInput;
}
