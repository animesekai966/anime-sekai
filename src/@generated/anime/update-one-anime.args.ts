import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class UpdateOneAnimeArgs {

    @Field(() => AnimeWhereUniqueInput, {nullable:false})
    @Type(() => AnimeWhereUniqueInput)
    where!: AnimeWhereUniqueInput;
}
