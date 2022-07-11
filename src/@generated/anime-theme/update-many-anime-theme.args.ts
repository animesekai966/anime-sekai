import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeUpdateManyMutationInput } from './anime-theme-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AnimeThemeWhereInput } from './anime-theme-where.input';

@ArgsType()
export class UpdateManyAnimeThemeArgs {

    @Field(() => AnimeThemeUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeThemeUpdateManyMutationInput)
    data!: AnimeThemeUpdateManyMutationInput;

    @Field(() => AnimeThemeWhereInput, {nullable:true})
    @Type(() => AnimeThemeWhereInput)
    where?: AnimeThemeWhereInput;
}
