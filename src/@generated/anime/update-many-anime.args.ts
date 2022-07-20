import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeUpdateManyMutationInput } from './anime-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AnimeWhereInput } from './anime-where.input';

@ArgsType()
export class UpdateManyAnimeArgs {

    @Field(() => AnimeUpdateManyMutationInput, {nullable:false})
    @Type(() => AnimeUpdateManyMutationInput)
    data!: AnimeUpdateManyMutationInput;

    @Field(() => AnimeWhereInput, {nullable:true})
    @Type(() => AnimeWhereInput)
    where?: AnimeWhereInput;
}
