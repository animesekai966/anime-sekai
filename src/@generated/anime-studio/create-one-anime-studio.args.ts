import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioCreateInput } from './anime-studio-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAnimeStudioArgs {

    @Field(() => AnimeStudioCreateInput, {nullable:false})
    @Type(() => AnimeStudioCreateInput)
    data!: AnimeStudioCreateInput;
}
