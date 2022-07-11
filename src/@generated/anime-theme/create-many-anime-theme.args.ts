import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeCreateManyInput } from './anime-theme-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAnimeThemeArgs {

    @Field(() => [AnimeThemeCreateManyInput], {nullable:false})
    @Type(() => AnimeThemeCreateManyInput)
    data!: Array<AnimeThemeCreateManyInput>;
}
