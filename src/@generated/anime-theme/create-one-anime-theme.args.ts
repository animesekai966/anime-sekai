import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeCreateInput } from './anime-theme-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAnimeThemeArgs {

    @Field(() => AnimeThemeCreateInput, {nullable:false})
    @Type(() => AnimeThemeCreateInput)
    data!: AnimeThemeCreateInput;
}
