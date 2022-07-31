import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumAnimeFormatWithAggregatesFilter } from '../prisma/enum-anime-format-with-aggregates-filter.input';
import { EnumAnimeStatusWithAggregatesFilter } from '../prisma/enum-anime-status-with-aggregates-filter.input';
import { EnumAnimeSeasonWithAggregatesFilter } from '../prisma/enum-anime-season-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { FloatNullableWithAggregatesFilter } from '../prisma/float-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { EnumAgeRatingWithAggregatesFilter } from '../prisma/enum-age-rating-with-aggregates-filter.input';
import { EnumAnimeSourceWithAggregatesFilter } from '../prisma/enum-anime-source-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    animeXId?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    animeBlkomId?: StringNullableWithAggregatesFilter;

    @Field(() => EnumAnimeFormatWithAggregatesFilter, {nullable:true})
    format?: EnumAnimeFormatWithAggregatesFilter;

    @Field(() => EnumAnimeStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAnimeStatusWithAggregatesFilter;

    @Field(() => EnumAnimeSeasonWithAggregatesFilter, {nullable:true})
    season?: EnumAnimeSeasonWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    episodesCount?: IntNullableWithAggregatesFilter;

    @Field(() => FloatNullableWithAggregatesFilter, {nullable:true})
    duration?: FloatNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    countryOfOrigin?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isLicensed?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    isAdult?: BoolWithAggregatesFilter;

    @Field(() => EnumAgeRatingWithAggregatesFilter, {nullable:true})
    rating?: EnumAgeRatingWithAggregatesFilter;

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

    @HideField()
    producerIDs?: StringNullableListFilter;

    @HideField()
    studioIDs?: StringNullableListFilter;

    @HideField()
    genreIDs?: StringNullableListFilter;
}
