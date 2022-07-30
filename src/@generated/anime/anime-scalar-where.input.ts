import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumAnimeFormatFilter } from '../prisma/enum-anime-format-filter.input';
import { EnumAnimeStatusFilter } from '../prisma/enum-anime-status-filter.input';
import { EnumAnimeSeasonFilter } from '../prisma/enum-anime-season-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumAgeRatingFilter } from '../prisma/enum-age-rating-filter.input';
import { EnumAnimeSourceFilter } from '../prisma/enum-anime-source-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AnimeScalarWhereInput {

    @Field(() => [AnimeScalarWhereInput], {nullable:true})
    AND?: Array<AnimeScalarWhereInput>;

    @Field(() => [AnimeScalarWhereInput], {nullable:true})
    OR?: Array<AnimeScalarWhereInput>;

    @Field(() => [AnimeScalarWhereInput], {nullable:true})
    NOT?: Array<AnimeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    anilistId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    animeXId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    animeBlkomId?: StringNullableFilter;

    @Field(() => EnumAnimeFormatFilter, {nullable:true})
    format?: EnumAnimeFormatFilter;

    @Field(() => EnumAnimeStatusFilter, {nullable:true})
    status?: EnumAnimeStatusFilter;

    @Field(() => EnumAnimeSeasonFilter, {nullable:true})
    season?: EnumAnimeSeasonFilter;

    @Field(() => IntFilter, {nullable:true})
    episodesCount?: IntFilter;

    @Field(() => FloatFilter, {nullable:true})
    duration?: FloatFilter;

    @Field(() => StringFilter, {nullable:true})
    countryOfOrigin?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isLicensed?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAdult?: BoolFilter;

    @Field(() => EnumAgeRatingFilter, {nullable:true})
    rating?: EnumAgeRatingFilter;

    @Field(() => EnumAnimeSourceFilter, {nullable:true})
    source?: EnumAnimeSourceFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    openings?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    endings?: StringNullableListFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    producerIDs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    studioIDs?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    genreIDs?: StringNullableListFilter;
}
