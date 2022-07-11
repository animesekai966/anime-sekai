import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeStudioWhereInput } from './anime-studio-where.input';
import { Type } from 'class-transformer';
import { AnimeStudioOrderByWithRelationInput } from './anime-studio-order-by-with-relation.input';
import { AnimeStudioWhereUniqueInput } from './anime-studio-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeStudioScalarFieldEnum } from './anime-studio-scalar-field.enum';

@ArgsType()
export class FindManyAnimeStudioArgs {

    @Field(() => AnimeStudioWhereInput, {nullable:true})
    @Type(() => AnimeStudioWhereInput)
    where?: AnimeStudioWhereInput;

    @Field(() => [AnimeStudioOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeStudioOrderByWithRelationInput>;

    @Field(() => AnimeStudioWhereUniqueInput, {nullable:true})
    cursor?: AnimeStudioWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AnimeStudioScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AnimeStudioScalarFieldEnum>;
}
