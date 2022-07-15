import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeGenreType } from '../prisma/anime-genre-type.enum';
import { AnimeCreateNestedManyWithoutGenresInput } from '../anime/anime-create-nested-many-without-genres.input';
import { AnimeGenreCreateanimeIDsInput } from './anime-genre-createanime-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AnimeGenreCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeGenreType, {nullable:true})
    type?: keyof typeof AnimeGenreType;

    @Field(() => AnimeCreateNestedManyWithoutGenresInput, {nullable:true})
    animes?: AnimeCreateNestedManyWithoutGenresInput;

    @HideField()
    animeIDs?: AnimeGenreCreateanimeIDsInput;
}
