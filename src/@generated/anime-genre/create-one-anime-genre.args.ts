import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreCreateInput } from './anime-genre-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAnimeGenreArgs {

    @Field(() => AnimeGenreCreateInput, {nullable:false})
    @Type(() => AnimeGenreCreateInput)
    data!: AnimeGenreCreateInput;
}
