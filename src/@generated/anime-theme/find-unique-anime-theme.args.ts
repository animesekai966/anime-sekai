import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAnimeThemeArgs {

    @Field(() => AnimeThemeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeThemeWhereUniqueInput)
    where!: AnimeThemeWhereUniqueInput;
}
