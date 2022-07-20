import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenreType } from '../prisma/genre-type.enum';
import { AnimeUncheckedCreateNestedManyWithoutGenresInput } from '../anime/anime-unchecked-create-nested-many-without-genres.input';
import { GenreCreateanimeIDsInput } from './genre-createanime-i-ds.input';

@InputType()
export class GenreUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GenreType, {nullable:true})
    type?: keyof typeof GenreType;

    @Field(() => AnimeUncheckedCreateNestedManyWithoutGenresInput, {nullable:true})
    animes?: AnimeUncheckedCreateNestedManyWithoutGenresInput;

    @Field(() => GenreCreateanimeIDsInput, {nullable:true})
    animeIDs?: GenreCreateanimeIDsInput;
}
