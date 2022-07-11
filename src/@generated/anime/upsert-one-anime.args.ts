import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';
import { AnimeCreateInput } from './anime-create.input';
import { AnimeUpdateInput } from './anime-update.input';

@ArgsType()
export class UpsertOneAnimeArgs {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;

    @Field(() => AnimeCreateInput, {nullable:false})
    @Type(() => AnimeCreateInput)
    create!: AnimeCreateInput;

    @Field(() => AnimeUpdateInput, {nullable:false})
    @Type(() => AnimeUpdateInput)
    update!: AnimeUpdateInput;
}
