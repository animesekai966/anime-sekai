import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreUpdateWithoutAnimeInput } from './genre-update-without-anime.input';

@InputType()
export class GenreUpdateWithWhereUniqueWithoutAnimeInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: GenreWhereUniqueInput;

    @Field(() => GenreUpdateWithoutAnimeInput, {nullable:false})
    @Type(() => GenreUpdateWithoutAnimeInput)
    data!: GenreUpdateWithoutAnimeInput;
}
