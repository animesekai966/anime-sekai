import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { EnumAnimeTypeFilter } from '../prisma/enum-anime-type-filter.input';
import { EnumAgeRatingFilter } from '../prisma/enum-age-rating-filter.input';
import { EnumAnimeSeasonFilter } from '../prisma/enum-anime-season-filter.input';
import { EnumAnimeStatusFilter } from '../prisma/enum-anime-status-filter.input';
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

    @Field(() => StringFilter, {nullable:true})
    animeXId?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    banner?: StringNullableFilter;

    @Field(() => EnumAnimeTypeFilter, {nullable:true})
    type?: EnumAnimeTypeFilter;

    @Field(() => StringFilter, {nullable:true})
    duration?: StringFilter;

    @Field(() => EnumAgeRatingFilter, {nullable:true})
    ageRating?: EnumAgeRatingFilter;

    @Field(() => EnumAnimeSeasonFilter, {nullable:true})
    season?: EnumAnimeSeasonFilter;

    @Field(() => StringFilter, {nullable:true})
    source?: StringFilter;

    @Field(() => EnumAnimeStatusFilter, {nullable:true})
    status?: EnumAnimeStatusFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    episodesCount?: IntNullableFilter;

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

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}