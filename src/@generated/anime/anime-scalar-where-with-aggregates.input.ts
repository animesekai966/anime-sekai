import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumAnimeFormatWithAggregatesFilter } from '../prisma/enum-anime-format-with-aggregates-filter.input';
import { EnumAnimeStatusWithAggregatesFilter } from '../prisma/enum-anime-status-with-aggregates-filter.input';
import { EnumAnimeSeasonWithAggregatesFilter } from '../prisma/enum-anime-season-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumAnimeSourceWithAggregatesFilter } from '../prisma/enum-anime-source-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class AnimeScalarWhereWithAggregatesInput {

    @Field(() => [AnimeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AnimeScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AnimeScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AnimeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    slug?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    malId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    anilistId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    animeifyId?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    animeSlayerId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    xsAnimeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    animeBlkomId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    banner?: StringNullableWithAggregatesFilter;

    @Field(() => EnumAnimeFormatWithAggregatesFilter, {nullable:true})
    format?: EnumAnimeFormatWithAggregatesFilter;

    @Field(() => EnumAnimeStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAnimeStatusWithAggregatesFilter;

    @Field(() => EnumAnimeSeasonWithAggregatesFilter, {nullable:true})
    season?: EnumAnimeSeasonWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    episodesCount?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    duration?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    countryOfOrigin?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isLicensed?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAdult?: BoolWithAggregatesFilter;

    @Field(() => EnumAnimeSourceWithAggregatesFilter, {nullable:true})
    source?: EnumAnimeSourceWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    openings?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    endings?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    producerIDs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    studioIDs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    genreIDs?: StringNullableListFilter;
}
