import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumGenreTypeFilter } from '../prisma/enum-genre-type-filter.input';
import { AnimeListRelationFilter } from '../anime/anime-list-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GenreWhereInput {

    @Field(() => [GenreWhereInput], {nullable:true})
    AND?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    OR?: Array<GenreWhereInput>;

    @Field(() => [GenreWhereInput], {nullable:true})
    NOT?: Array<GenreWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumGenreTypeFilter, {nullable:true})
    type?: EnumGenreTypeFilter;

    @Field(() => AnimeListRelationFilter, {nullable:true})
    anime?: AnimeListRelationFilter;

    @HideField()
    animeIDs?: StringNullableListFilter;
}
