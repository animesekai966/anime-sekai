import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { AnimeListRelationFilter } from '../anime/anime-list-relation-filter.input';

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

    @Field(() => StringNullableListFilter, {nullable:true})
    animeIDs?: StringNullableListFilter;

    @Field(() => AnimeListRelationFilter, {nullable:true})
    animes?: AnimeListRelationFilter;
}
