import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeWhereInput } from './anime-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class UpdateManyAnimeArgs {

    @Field(() => AnimeWhereInput, {nullable:true})
    @Type(() => AnimeWhereInput)
    where?: AnimeWhereInput;
}
