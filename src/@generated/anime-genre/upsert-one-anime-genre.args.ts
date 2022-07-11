import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeGenreCreateInput } from './anime-genre-create.input';
import { AnimeGenreUpdateInput } from './anime-genre-update.input';

@ArgsType()
export class UpsertOneAnimeGenreArgs {

    @Field(() => AnimeGenreWhereUniqueInput, {nullable:false})
    @Type(() => AnimeGenreWhereUniqueInput)
    where!: AnimeGenreWhereUniqueInput;

    @Field(() => AnimeGenreCreateInput, {nullable:false})
    @Type(() => AnimeGenreCreateInput)
    create!: AnimeGenreCreateInput;

    @Field(() => AnimeGenreUpdateInput, {nullable:false})
    @Type(() => AnimeGenreUpdateInput)
    update!: AnimeGenreUpdateInput;
}
