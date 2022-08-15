import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { HideField } from '@nestjs/graphql';
import { ImageNullableCompositeFilter } from '../prisma/image-nullable-composite-filter.input';
import { ImageCompositeFilter } from '../prisma/image-composite-filter.input';
import { ImageObjectEqualityInput } from '../prisma/image-object-equality.input';
import { AnimeTitleCompositeFilter } from '../prisma/anime-title-composite-filter.input';
import { EnumAnimeFormatFilter } from '../prisma/enum-anime-format-filter.input';
import { EnumAnimeStatusFilter } from '../prisma/enum-anime-status-filter.input';
import { DescriptionCompositeFilter } from '../prisma/description-composite-filter.input';
import { FuzzyDateCompositeFilter } from '../prisma/fuzzy-date-composite-filter.input';
import { EnumAnimeSeasonFilter } from '../prisma/enum-anime-season-filter.input';
import { FloatNullableFilter } from '../prisma/float-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumAgeRatingFilter } from '../prisma/enum-age-rating-filter.input';
import { EnumAnimeSourceFilter } from '../prisma/enum-anime-source-filter.input';
import { AnimeTrailerCompositeFilter } from '../prisma/anime-trailer-composite-filter.input';
import { AnimeScoreProvidersNullableCompositeFilter } from '../prisma/anime-score-providers-nullable-composite-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { AnimeBroadcastNullableCompositeFilter } from '../prisma/anime-broadcast-nullable-composite-filter.input';
import { GenreListRelationFilter } from '../genre/genre-list-relation-filter.input';
import { EpisodeListRelationFilter } from '../episode/episode-list-relation-filter.input';
import { StudioListRelationFilter } from '../studio/studio-list-relation-filter.input';
import { CharacterOnAnimeListRelationFilter } from '../character-on-anime/character-on-anime-list-relation-filter.input';
import { StaffOnAnimeListRelationFilter } from '../staff-on-anime/staff-on-anime-list-relation-filter.input';
import { AnimeRelationTypeObjectEqualityInput } from '../prisma/anime-relation-type-object-equality.input';
import { ExternalLinkObjectEqualityInput } from '../prisma/external-link-object-equality.input';
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

    @HideField()
    animeXId?: StringNullableFilter;

    @Field(() => ImageNullableCompositeFilter, {nullable:true})
    banner?: ImageNullableCompositeFilter;

    @Field(() => ImageCompositeFilter, {nullable:true})
    cover?: ImageCompositeFilter;

    @Field(() => [ImageObjectEqualityInput], {nullable:true})
    altCovers?: Array<ImageObjectEqualityInput>;

    @Field(() => AnimeTitleCompositeFilter, {nullable:true})
    title?: AnimeTitleCompositeFilter;

    @Field(() => EnumAnimeFormatFilter, {nullable:true})
    format?: EnumAnimeFormatFilter;

    @Field(() => EnumAnimeStatusFilter, {nullable:true})
    status?: EnumAnimeStatusFilter;

    @Field(() => DescriptionCompositeFilter, {nullable:true})
    description?: DescriptionCompositeFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    startDate?: FuzzyDateCompositeFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    endDate?: FuzzyDateCompositeFilter;

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

    @Field(() => AnimeTrailerCompositeFilter, {nullable:true})
    trailer?: AnimeTrailerCompositeFilter;

    @Field(() => AnimeScoreProvidersNullableCompositeFilter, {nullable:true})
    score?: AnimeScoreProvidersNullableCompositeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    openings?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    endings?: StringNullableListFilter;

    @Field(() => AnimeBroadcastNullableCompositeFilter, {nullable:true})
    broadcast?: AnimeBroadcastNullableCompositeFilter;

    @Field(() => GenreListRelationFilter, {nullable:true})
    genres?: GenreListRelationFilter;

    @Field(() => EpisodeListRelationFilter, {nullable:true})
    episodes?: EpisodeListRelationFilter;

    @Field(() => StudioListRelationFilter, {nullable:true})
    producers?: StudioListRelationFilter;

    @Field(() => StudioListRelationFilter, {nullable:true})
    studios?: StudioListRelationFilter;

    @Field(() => CharacterOnAnimeListRelationFilter, {nullable:true})
    characters?: CharacterOnAnimeListRelationFilter;

    @Field(() => StaffOnAnimeListRelationFilter, {nullable:true})
    staff?: StaffOnAnimeListRelationFilter;

    @Field(() => [AnimeRelationTypeObjectEqualityInput], {nullable:true})
    related?: Array<AnimeRelationTypeObjectEqualityInput>;

    @Field(() => [ExternalLinkObjectEqualityInput], {nullable:true})
    externalLinks?: Array<ExternalLinkObjectEqualityInput>;

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
