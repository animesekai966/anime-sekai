import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreUpdateWithoutAnimeInput } from './genre-update-without-anime.input';
import { GenreCreateWithoutAnimeInput } from './genre-create-without-anime.input';

@InputType()
export class GenreUpsertWithWhereUniqueWithoutAnimeInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: GenreWhereUniqueInput;

    @Field(() => GenreUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => GenreUpdateWithoutAnimeInput)
    update!: GenreUpdateWithoutAnimeInput;

    @Field(() => GenreCreateWithoutAnimeInput, {nullable:false})
    @Type(() => GenreCreateWithoutAnimeInput)
    create!: GenreCreateWithoutAnimeInput;
}
