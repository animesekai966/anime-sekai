import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeWhereInput } from './anime-where.input';

@InputType()
export class AnimeRelationFilter {

    @Field(() => AnimeWhereInput, {nullable:true})
    is?: AnimeWhereInput;

    @Field(() => AnimeWhereInput, {nullable:true})
    isNot?: AnimeWhereInput;
}
