import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioUpdateInput } from './anime-studio-update.input';
import { Type } from 'class-transformer';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';

@ArgsType()
export class UpdateOneAnimeStudioArgs {

    @Field(() => AnimeStudioUpdateInput, {nullable:false})
    @Type(() => AnimeStudioUpdateInput)
    data!: AnimeStudioUpdateInput;

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:false})
    @Type(() => AnimeStudioWhereUniqueInput)
    where!: AnimeStudioWhereUniqueInput;
}
