import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeGenreWhereInput } from './anime-genre-where.input';

@InputType()
export class AnimeGenreListRelationFilter {

    @Field(() => AnimeGenreWhereInput, {nullable:true})
    every?: AnimeGenreWhereInput;

    @Field(() => AnimeGenreWhereInput, {nullable:true})
    some?: AnimeGenreWhereInput;

    @Field(() => AnimeGenreWhereInput, {nullable:true})
    none?: AnimeGenreWhereInput;
}
