import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeThemeWhereInput } from './anime-theme-where.input';
import { Type } from 'class-transformer';
import { AnimeThemeOrderByWithRelationInput } from './anime-theme-order-by-with-relation.input';
import { AnimeThemeWhereUniqueInput } from './anime-theme-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeThemeScalarFieldEnum } from './anime-theme-scalar-field.enum';

@ArgsType()
export class FindManyAnimeThemeArgs {

    @Field(() => AnimeThemeWhereInput, {nullable:true})
    @Type(() => AnimeThemeWhereInput)
    where?: AnimeThemeWhereInput;

    @Field(() => [AnimeThemeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeThemeOrderByWithRelationInput>;

    @Field(() => AnimeThemeWhereUniqueInput, {nullable:true})
    cursor?: AnimeThemeWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AnimeThemeScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AnimeThemeScalarFieldEnum>;
}
