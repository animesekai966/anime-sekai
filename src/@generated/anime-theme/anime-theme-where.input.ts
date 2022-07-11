import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { AnimeListRelationFilter } from '../anime/anime-list-relation-filter.input';

@InputType()
export class AnimeThemeWhereInput {

    @Field(() => [AnimeThemeWhereInput], {nullable:true})
    AND?: Array<AnimeThemeWhereInput>;

    @Field(() => [AnimeThemeWhereInput], {nullable:true})
    OR?: Array<AnimeThemeWhereInput>;

    @Field(() => [AnimeThemeWhereInput], {nullable:true})
    NOT?: Array<AnimeThemeWhereInput>;

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
