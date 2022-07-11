import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioWhereInput } from './anime-studio-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAnimeStudioArgs {

    @Field(() => AnimeStudioWhereInput, {nullable:true})
    @Type(() => AnimeStudioWhereInput)
    where?: AnimeStudioWhereInput;
}
