import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeThemeWhereInput } from './anime-theme-where.input';

@InputType()
export class AnimeThemeListRelationFilter {

    @Field(() => AnimeThemeWhereInput, {nullable:true})
    every?: AnimeThemeWhereInput;

    @Field(() => AnimeThemeWhereInput, {nullable:true})
    some?: AnimeThemeWhereInput;

    @Field(() => AnimeThemeWhereInput, {nullable:true})
    none?: AnimeThemeWhereInput;
}
