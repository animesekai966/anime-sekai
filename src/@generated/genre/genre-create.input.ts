import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenreType } from '../prisma/genre-type.enum';
import { AnimeCreateNestedManyWithoutGenresInput } from '../anime/anime-create-nested-many-without-genres.input';
import { GenreCreateanimeIDsInput } from './genre-createanime-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GenreCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GenreType, {nullable:true})
    type?: keyof typeof GenreType;

    @Field(() => AnimeCreateNestedManyWithoutGenresInput, {nullable:true})
    anime?: AnimeCreateNestedManyWithoutGenresInput;

    @HideField()
    animeIDs?: GenreCreateanimeIDsInput;
}
