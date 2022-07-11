import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreWhereInput } from './anime-genre-where.input';
import { Type } from 'class-transformer';
import { AnimeGenreOrderByWithRelationInput } from './anime-genre-order-by-with-relation.input';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeGenreScalarFieldEnum } from './anime-genre-scalar-field.enum';

@ArgsType()
export class FindManyAnimeGenreArgs {

    @Field(() => AnimeGenreWhereInput, {nullable:true})
    @Type(() => AnimeGenreWhereInput)
    where?: AnimeGenreWhereInput;

    @Field(() => [AnimeGenreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeGenreOrderByWithRelationInput>;

    @Field(() => AnimeGenreWhereUniqueInput, {nullable:true})
    cursor?: AnimeGenreWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AnimeGenreScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AnimeGenreScalarFieldEnum>;
}
