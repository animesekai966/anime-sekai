import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreUpdateManyMutationInput } from './anime-genre-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AnimeGenreWhereInput } from './anime-genre-where.input';

@ArgsType()
export class UpdateManyAnimeGenreArgs {

    @Field(() => AnimeGenreUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeGenreUpdateManyMutationInput)
    data!: AnimeGenreUpdateManyMutationInput;

    @Field(() => AnimeGenreWhereInput, {nullable:true})
    @Type(() => AnimeGenreWhereInput)
    where?: AnimeGenreWhereInput;
}
