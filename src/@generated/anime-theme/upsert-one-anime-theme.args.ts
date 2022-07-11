import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeThemeCreateInput } from './anime-theme-create.input';
import { AnimeThemeUpdateInput } from './anime-theme-update.input';

@ArgsType()
export class UpsertOneAnimeThemeArgs {

    @Field(() => AnimeThemeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeThemeWhereUniqueInput)
    where!: AnimeThemeWhereUniqueInput;

    @Field(() => AnimeThemeCreateInput, {nullable:false})
    @Type(() => AnimeThemeCreateInput)
    create!: AnimeThemeCreateInput;

    @Field(() => AnimeThemeUpdateInput, {nullable:false})
    @Type(() => AnimeThemeUpdateInput)
    update!: AnimeThemeUpdateInput;
}
