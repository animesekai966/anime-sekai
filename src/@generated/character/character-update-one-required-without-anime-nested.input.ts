import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterCreateWithoutAnimeInput } from './character-create-without-anime.input';
import { Type } from 'class-transformer';
import { CharacterCreateOrConnectWithoutAnimeInput } from './character-create-or-connect-without-anime.input';
import { CharacterUpsertWithoutAnimeInput } from './character-upsert-without-anime.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { CharacterUpdateWithoutAnimeInput } from './character-update-without-anime.input';

@InputType()
export class CharacterUpdateOneRequiredWithoutAnimeNestedInput {

    @Field(() => CharacterCreateWithoutAnimeInput, {nullable:true})
    @Type(() => CharacterCreateWithoutAnimeInput)
    create?: CharacterCreateWithoutAnimeInput;

    @Field(() => CharacterCreateOrConnectWithoutAnimeInput, {nullable:true})
    @Type(() => CharacterCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: CharacterCreateOrConnectWithoutAnimeInput;

    @Field(() => CharacterUpsertWithoutAnimeInput, {nullable:true})
    @Type(() => CharacterUpsertWithoutAnimeInput)
    upsert?: CharacterUpsertWithoutAnimeInput;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    @Type(() => CharacterWhereUniqueInput)
    connect?: CharacterWhereUniqueInput;

    @Field(() => CharacterUpdateWithoutAnimeInput, {nullable:true})
    @Type(() => CharacterUpdateWithoutAnimeInput)
    update?: CharacterUpdateWithoutAnimeInput;
}
