import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeUpdateInput } from './anime-update.input';
import { Type } from 'class-transformer';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';

@ArgsType()
export class UpdateOneAnimeArgs {

    @Field(() => AnimeUpdateInput, {nullable:false})
    @Type(() => AnimeUpdateInput)
    data!: AnimeUpdateInput;

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;
}
