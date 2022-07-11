import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreWhereInput } from './anime-genre-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAnimeGenreArgs {

    @Field(() => AnimeGenreWhereInput, {nullable:true})
    @Type(() => AnimeGenreWhereInput)
    where?: AnimeGenreWhereInput;
}
