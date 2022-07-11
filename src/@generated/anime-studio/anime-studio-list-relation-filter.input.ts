import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeStudioWhereInput } from './anime-studio-where.input';

@InputType()
export class AnimeStudioListRelationFilter {

    @Field(() => AnimeStudioWhereInput, {nullable:true})
    every?: AnimeStudioWhereInput;

    @Field(() => AnimeStudioWhereInput, {nullable:true})
    some?: AnimeStudioWhereInput;

    @Field(() => AnimeStudioWhereInput, {nullable:true})
    none?: AnimeStudioWhereInput;
}
