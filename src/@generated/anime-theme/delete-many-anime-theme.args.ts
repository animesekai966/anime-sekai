import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeWhereInput } from './anime-theme-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAnimeThemeArgs {

    @Field(() => AnimeThemeWhereInput, {nullable:true})
    @Type(() => AnimeThemeWhereInput)
    where?: AnimeThemeWhereInput;
}
