import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateWithoutAnimeInput } from './characters-on-animes-create-without-anime.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateOrConnectWithoutAnimeInput } from './characters-on-animes-create-or-connect-without-anime.input';
import { CharactersOnAnimesCreateManyAnimeInputEnvelope } from './characters-on-animes-create-many-anime-input-envelope.input';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';

@InputType()
export class CharactersOnAnimesUncheckedCreateNestedManyWithoutAnimeInput {

    @Field(() => [CharactersOnAnimesCreateWithoutAnimeInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateWithoutAnimeInput)
    create?: Array<CharactersOnAnimesCreateWithoutAnimeInput>;

    @Field(() => [CharactersOnAnimesCreateOrConnectWithoutAnimeInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateOrConnectWithoutAnimeInput)
    connectOrCreate?: Array<CharactersOnAnimesCreateOrConnectWithoutAnimeInput>;

    @Field(() => CharactersOnAnimesCreateManyAnimeInputEnvelope, {nullable:true})
    @Type(() => CharactersOnAnimesCreateManyAnimeInputEnvelope)
    createMany?: CharactersOnAnimesCreateManyAnimeInputEnvelope;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    connect?: Array<CharactersOnAnimesWhereUniqueInput>;
}
