import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeGenreCreateanimeIDsInput } from './anime-genre-createanime-i-ds.input';

@InputType()
export class AnimeGenreCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeGenreCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeGenreCreateanimeIDsInput;
}
