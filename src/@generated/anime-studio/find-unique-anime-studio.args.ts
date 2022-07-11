import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAnimeStudioArgs {

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:false})
    @Type(() => AnimeStudioWhereUniqueInput)
    where!: AnimeStudioWhereUniqueInput;
}
