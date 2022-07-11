import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioCreateManyInput } from './anime-studio-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAnimeStudioArgs {

    @Field(() => [AnimeStudioCreateManyInput], {nullable:false})
    @Type(() => AnimeStudioCreateManyInput)
    data!: Array<AnimeStudioCreateManyInput>;
}
