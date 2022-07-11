import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereInput } from './anime-where.input';

@InputType()
export class AnimeListRelationFilter {

    @Field(() => AnimeWhereInput, {nullable:true})
    every?: AnimeWhereInput;

    @Field(() => AnimeWhereInput, {nullable:true})
    some?: AnimeWhereInput;

    @Field(() => AnimeWhereInput, {nullable:true})
    none?: AnimeWhereInput;
}
