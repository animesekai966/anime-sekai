import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AnimeCoverCompositeFilter } from '../prisma/anime-cover-composite-filter.input';
import { AnimeCoverObjectEqualityInput } from '../prisma/anime-cover-object-equality.input';
import { AnimeTitleCompositeFilter } from '../prisma/anime-title-composite-filter.input';
import { EnumAnimeTypeFilter } from '../prisma/enum-anime-type-filter.input';
import { FuzzyDateCompositeFilter } from '../prisma/fuzzy-date-composite-filter.input';
import { EnumAgeRatingFilter } from '../prisma/enum-age-rating-filter.input';
import { AnimeScoreCompositeFilter } from '../prisma/anime-score-composite-filter.input';
import { EnumAnimeSeasonFilter } from '../prisma/enum-anime-season-filter.input';
import { AnimeBroadcastCompositeFilter } from '../prisma/anime-broadcast-composite-filter.input';
import { AnimeDescriptionCompositeFilter } from '../prisma/anime-description-composite-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { RelatedAnimeObjectEqualityInput } from '../prisma/related-anime-object-equality.input';
import { EpisodeObjectEqualityInput } from '../prisma/episode-object-equality.input';
import { ExternalSiteObjectEqualityInput } from '../prisma/external-site-object-equality.input';
import { AnimeStudioListRelationFilter } from '../anime-studio/anime-studio-list-relation-filter.input';
import { AnimeGenreListRelationFilter } from '../anime-genre/anime-genre-list-relation-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class AnimeWhereInput {

    @Field(() => [AnimeWhereInput], {nullable:true})
    AND?: Array<AnimeWhereInput>;

    @Field(() => [AnimeWhereInput], {nullable:true})
    OR?: Array<AnimeWhereInput>;

    @Field(() => [AnimeWhereInput], {nullable:true})
    NOT?: Array<AnimeWhereInput>;

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

    @Field(() => AnimeCoverCompositeFilter, {nullable:true})
    cover?: AnimeCoverCompositeFilter;

    @Field(() => [AnimeCoverObjectEqualityInput], {nullable:true})
    altCovers?: Array<AnimeCoverObjectEqualityInput>;

    @Field(() => AnimeTitleCompositeFilter, {nullable:true})
    title?: AnimeTitleCompositeFilter;

    @Field(() => EnumAnimeTypeFilter, {nullable:true})
    type?: EnumAnimeTypeFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    startDate?: FuzzyDateCompositeFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    endDate?: FuzzyDateCompositeFilter;

    @Field(() => StringFilter, {nullable:true})
    duration?: StringFilter;

    @Field(() => EnumAgeRatingFilter, {nullable:true})
    ageRating?: EnumAgeRatingFilter;

    @Field(() => AnimeScoreCompositeFilter, {nullable:true})
    score?: AnimeScoreCompositeFilter;

    @Field(() => EnumAnimeSeasonFilter, {nullable:true})
    season?: EnumAnimeSeasonFilter;

    @Field(() => AnimeBroadcastCompositeFilter, {nullable:true})
    broadcast?: AnimeBroadcastCompositeFilter;

    @Field(() => AnimeDescriptionCompositeFilter, {nullable:true})
    description?: AnimeDescriptionCompositeFilter;

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

    @Field(() => [RelatedAnimeObjectEqualityInput], {nullable:true})
    related?: Array<RelatedAnimeObjectEqualityInput>;

    @Field(() => [EpisodeObjectEqualityInput], {nullable:true})
    episodes?: Array<EpisodeObjectEqualityInput>;

    @Field(() => [ExternalSiteObjectEqualityInput], {nullable:true})
    externalSites?: Array<ExternalSiteObjectEqualityInput>;

    @Field(() => AnimeStudioListRelationFilter, {nullable:true})
    studios?: AnimeStudioListRelationFilter;

    @Field(() => AnimeStudioListRelationFilter, {nullable:true})
    producers?: AnimeStudioListRelationFilter;

    @Field(() => AnimeGenreListRelationFilter, {nullable:true})
    genres?: AnimeGenreListRelationFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
