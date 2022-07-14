import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { EnumAnimeTypeWithAggregatesFilter } from '../prisma/enum-anime-type-with-aggregates-filter.input';
import { EnumAgeRatingWithAggregatesFilter } from '../prisma/enum-age-rating-with-aggregates-filter.input';
import { EnumAnimeSeasonWithAggregatesFilter } from '../prisma/enum-anime-season-with-aggregates-filter.input';
import { EnumAnimeStatusWithAggregatesFilter } from '../prisma/enum-anime-status-with-aggregates-filter.input';
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

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    malId?: IntWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    anilistId?: IntNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    animeXId?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    banner?: StringNullableWithAggregatesFilter;

    @Field(() => EnumAnimeTypeWithAggregatesFilter, {nullable:true})
    type?: EnumAnimeTypeWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    duration?: StringWithAggregatesFilter;

    @Field(() => EnumAgeRatingWithAggregatesFilter, {nullable:true})
    ageRating?: EnumAgeRatingWithAggregatesFilter;

    @Field(() => EnumAnimeSeasonWithAggregatesFilter, {nullable:true})
    season?: EnumAnimeSeasonWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    source?: StringWithAggregatesFilter;

    @Field(() => EnumAnimeStatusWithAggregatesFilter, {nullable:true})
    status?: EnumAnimeStatusWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    episodesCount?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    openings?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    endings?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    genreIDs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    studioIDs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    producerIDs?: StringNullableListFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    episodesUpdatedAt?: DateTimeWithAggregatesFilter;
}
