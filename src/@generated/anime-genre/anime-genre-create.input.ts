import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeGenreCreateanimeIDsInput } from './anime-genre-createanime-i-ds.input';
import { AnimeCreateNestedManyWithoutGenresInput } from '../anime/anime-create-nested-many-without-genres.input';

@InputType()
export class AnimeGenreCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeGenreCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeGenreCreateanimeIDsInput;

    @Field(() => AnimeCreateNestedManyWithoutGenresInput, {nullable:true})
    animes?: AnimeCreateNestedManyWithoutGenresInput;
}
