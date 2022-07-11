import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeStudioCreateInput } from './anime-studio-create.input';
import { AnimeStudioUpdateInput } from './anime-studio-update.input';

@ArgsType()
export class UpsertOneAnimeStudioArgs {

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:false})
    @Type(() => AnimeStudioWhereUniqueInput)
    where!: AnimeStudioWhereUniqueInput;

    @Field(() => AnimeStudioCreateInput, {nullable:false})
    @Type(() => AnimeStudioCreateInput)
    create!: AnimeStudioCreateInput;

    @Field(() => AnimeStudioUpdateInput, {nullable:false})
    @Type(() => AnimeStudioUpdateInput)
    update!: AnimeStudioUpdateInput;
}
