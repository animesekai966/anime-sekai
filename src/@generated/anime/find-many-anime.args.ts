import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeWhereInput } from './anime-where.input';
import { Type } from 'class-transformer';
import { AnimeOrderByWithRelationInput } from './anime-order-by-with-relation.input';
import { AnimeWhereUniqueInput } from './anime-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeScalarFieldEnum } from './anime-scalar-field.enum';

@ArgsType()
export class FindManyAnimeArgs {

    @Field(() => AnimeWhereInput, {nullable:true})
    @Type(() => AnimeWhereInput)
    where?: AnimeWhereInput;

    @Field(() => [AnimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeOrderByWithRelationInput>;

    @Field(() => AnimeWhereUniqueInput, {nullable:true})
    cursor?: AnimeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AnimeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AnimeScalarFieldEnum>;
}
