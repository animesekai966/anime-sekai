import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeUpdateInput } from './anime-theme-update.input';
import { Type } from 'class-transformer';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';

@ArgsType()
export class UpdateOneAnimeThemeArgs {

    @Field(() => AnimeThemeUpdateInput, {nullable:false})
    @Type(() => AnimeThemeUpdateInput)
    data!: AnimeThemeUpdateInput;

    @Field(() => AnimeThemeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeThemeWhereUniqueInput)
    where!: AnimeThemeWhereUniqueInput;
}
