import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesUpdateWithoutAnimeInput } from './characters-on-animes-update-without-anime.input';
import { CharactersOnAnimesCreateWithoutAnimeInput } from './characters-on-animes-create-without-anime.input';

@InputType()
export class CharactersOnAnimesUpsertWithWhereUniqueWithoutAnimeInput {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => CharactersOnAnimesUpdateWithoutAnimeInput)
    update!: CharactersOnAnimesUpdateWithoutAnimeInput;

    @Field(() => CharactersOnAnimesCreateWithoutAnimeInput, {nullable:false})
    @Type(() => CharactersOnAnimesCreateWithoutAnimeInput)
    create!: CharactersOnAnimesCreateWithoutAnimeInput;
}
