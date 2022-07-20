import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateWithoutAnimeInput } from './characters-on-animes-create-without-anime.input';

@InputType()
export class CharactersOnAnimesCreateOrConnectWithoutAnimeInput {

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:false})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    where!: CharactersOnAnimesWhereUniqueInput;

    @Field(() => CharactersOnAnimesCreateWithoutAnimeInput, {nullable:false})
    @Type(() => CharactersOnAnimesCreateWithoutAnimeInput)
    create!: CharactersOnAnimesCreateWithoutAnimeInput;
}
