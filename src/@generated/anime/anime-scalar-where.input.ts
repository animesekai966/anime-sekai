import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumAnimeFormatFilter } from '../prisma/enum-anime-format-filter.input';
import { EnumAnimeStatusFilter } from '../prisma/enum-anime-status-filter.input';
import { EnumAnimeSeasonFilter } from '../prisma/enum-anime-season-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
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

    @Field(() => IntFilter, {nullable:true})
    malId?: IntFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    anilistId?: IntNullableFilter;

    @HideField()
    animeXId?: StringNullableFilter;

    @Field(() => EnumAnimeFormatFilter, {nullable:true})
    format?: EnumAnimeFormatFilter;

    @Field(() => EnumAnimeStatusFilter, {nullable:true})
    status?: EnumAnimeStatusFilter;

    @Field(() => EnumAnimeSeasonFilter, {nullable:true})
    season?: EnumAnimeSeasonFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    episodesCount?: IntNullableFilter;

    @Field(() => FloatNullableFilter, {nullable:true})
    duration?: FloatNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    countryOfOrigin?: StringNullableFilter;

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

    @HideField()
    producerIDs?: StringNullableListFilter;

    @HideField()
    studioIDs?: StringNullableListFilter;

    @HideField()
    genreIDs?: StringNullableListFilter;
}
