import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { EnumAnimeGenreTypeFilter } from '../prisma/enum-anime-genre-type-filter.input';
import { AnimeListRelationFilter } from '../anime/anime-list-relation-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AnimeGenreWhereInput {

    @Field(() => [AnimeGenreWhereInput], {nullable:true})
    AND?: Array<AnimeGenreWhereInput>;

    @Field(() => [AnimeGenreWhereInput], {nullable:true})
    OR?: Array<AnimeGenreWhereInput>;

    @Field(() => [AnimeGenreWhereInput], {nullable:true})
    NOT?: Array<AnimeGenreWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => EnumAnimeGenreTypeFilter, {nullable:true})
    type?: EnumAnimeGenreTypeFilter;

    @Field(() => AnimeListRelationFilter, {nullable:true})
    animes?: AnimeListRelationFilter;

    @HideField()
    animeIDs?: StringNullableListFilter;
}
