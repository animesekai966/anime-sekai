import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeThemeCreateanimeIDsInput } from './anime-theme-createanime-i-ds.input';
import { AnimeUncheckedCreateNestedManyWithoutThemesInput } from '../anime/anime-unchecked-create-nested-many-without-themes.input';

@InputType()
export class AnimeThemeUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => AnimeThemeCreateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeThemeCreateanimeIDsInput;

    @Field(() => AnimeUncheckedCreateNestedManyWithoutThemesInput, {nullable:true})
    animes?: AnimeUncheckedCreateNestedManyWithoutThemesInput;
}
