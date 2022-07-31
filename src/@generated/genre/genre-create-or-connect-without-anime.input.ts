import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Type } from 'class-transformer';
import { GenreCreateWithoutAnimeInput } from './genre-create-without-anime.input';

@InputType()
export class GenreCreateOrConnectWithoutAnimeInput {

    @Field(() => GenreWhereUniqueInput, {nullable:false})
    @Type(() => GenreWhereUniqueInput)
    where!: GenreWhereUniqueInput;

    @Field(() => GenreCreateWithoutAnimeInput, {nullable:false})
    @Type(() => GenreCreateWithoutAnimeInput)
    create!: GenreCreateWithoutAnimeInput;
}
