import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreUpdateInput } from './anime-genre-update.input';
import { Type } from 'class-transformer';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';

@ArgsType()
export class UpdateOneAnimeGenreArgs {

    @Field(() => AnimeGenreUpdateInput, {nullable:false})
    @Type(() => AnimeGenreUpdateInput)
    data!: AnimeGenreUpdateInput;

    @Field(() => AnimeGenreWhereUniqueInput, {nullable:false})
    @Type(() => AnimeGenreWhereUniqueInput)
    where!: AnimeGenreWhereUniqueInput;
}
