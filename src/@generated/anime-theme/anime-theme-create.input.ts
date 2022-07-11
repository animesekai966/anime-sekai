import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeThemeCreateanimeIDsInput } from './anime-theme-createanime-i-ds.input';
import { AnimeCreateNestedManyWithoutThemesInput } from '../anime/anime-create-nested-many-without-themes.input';

@InputType()
export class AnimeThemeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeThemeCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeThemeCreateanimeIDsInput;

    @Field(() => AnimeCreateNestedManyWithoutThemesInput, {nullable:true})
    animes?: AnimeCreateNestedManyWithoutThemesInput;
}
