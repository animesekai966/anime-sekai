import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateWithoutAnimeInput } from './characters-on-animes-create-without-anime.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateOrConnectWithoutAnimeInput } from './characters-on-animes-create-or-connect-without-anime.input';
import { CharactersOnAnimesUpsertWithWhereUniqueWithoutAnimeInput } from './characters-on-animes-upsert-with-where-unique-without-anime.input';
import { CharactersOnAnimesCreateManyAnimeInputEnvelope } from './characters-on-animes-create-many-anime-input-envelope.input';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { CharactersOnAnimesUpdateWithWhereUniqueWithoutAnimeInput } from './characters-on-animes-update-with-where-unique-without-anime.input';
import { CharactersOnAnimesUpdateManyWithWhereWithoutAnimeInput } from './characters-on-animes-update-many-with-where-without-anime.input';
import { CharactersOnAnimesScalarWhereInput } from './characters-on-animes-scalar-where.input';

@InputType()
export class CharactersOnAnimesUpdateManyWithoutAnimeNestedInput {

    @Field(() => [CharactersOnAnimesCreateWithoutAnimeInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateWithoutAnimeInput)
    create?: Array<CharactersOnAnimesCreateWithoutAnimeInput>;

    @Field(() => [CharactersOnAnimesCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<CharactersOnAnimesCreateOrConnectWithoutAnimeInput>;

    @Field(() => [CharactersOnAnimesUpsertWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpsertWithWhereUniqueWithoutAnimeInput)
    upsert?: Array<CharactersOnAnimesUpsertWithWhereUniqueWithoutAnimeInput>;

    @Field(() => CharactersOnAnimesCreateManyAnimeInputEnvelope, {nullable:true})
    @Type(() => CharactersOnAnimesCreateManyAnimeInputEnvelope)
    createMany?: CharactersOnAnimesCreateManyAnimeInputEnvelope;

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

    @Field(() => [CharactersOnAnimesUpdateWithWhereUniqueWithoutAnimeInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpdateWithWhereUniqueWithoutAnimeInput)
    update?: Array<CharactersOnAnimesUpdateWithWhereUniqueWithoutAnimeInput>;

    @Field(() => [CharactersOnAnimesUpdateManyWithWhereWithoutAnimeInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpdateManyWithWhereWithoutAnimeInput)
    updateMany?: Array<CharactersOnAnimesUpdateManyWithWhereWithoutAnimeInput>;

    @Field(() => [CharactersOnAnimesScalarWhereInput], {nullable:true})
    @Type(() => CharactersOnAnimesScalarWhereInput)
    deleteMany?: Array<CharactersOnAnimesScalarWhereInput>;
}
