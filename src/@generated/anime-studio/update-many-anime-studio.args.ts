import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioUpdateManyMutationInput } from './anime-studio-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AnimeStudioWhereInput } from './anime-studio-where.input';

@ArgsType()
export class UpdateManyAnimeStudioArgs {

    @Field(() => AnimeStudioUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeStudioUpdateManyMutationInput)
    data!: AnimeStudioUpdateManyMutationInput;

    @Field(() => AnimeStudioWhereInput, {nullable:true})
    @Type(() => AnimeStudioWhereInput)
    where?: AnimeStudioWhereInput;
}
