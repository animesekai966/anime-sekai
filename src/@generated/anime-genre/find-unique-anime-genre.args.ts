import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAnimeGenreArgs {

    @Field(() => AnimeGenreWhereUniqueInput, {nullable:false})
    @Type(() => AnimeGenreWhereUniqueInput)
    where!: AnimeGenreWhereUniqueInput;
}
