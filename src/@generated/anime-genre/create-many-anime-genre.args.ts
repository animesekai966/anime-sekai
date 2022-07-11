import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreCreateManyInput } from './anime-genre-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAnimeGenreArgs {

    @Field(() => [AnimeGenreCreateManyInput], {nullable:false})
    @Type(() => AnimeGenreCreateManyInput)
    data!: Array<AnimeGenreCreateManyInput>;
}
