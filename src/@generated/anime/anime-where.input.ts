import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { AnimeCoverImageCompositeFilter } from '../prisma/anime-cover-image-composite-filter.input';
import { AnimeCoverImageObjectEqualityInput } from '../prisma/anime-cover-image-object-equality.input';
import { AnimeTitleCompositeFilter } from '../prisma/anime-title-composite-filter.input';
import { EnumAnimeFormatFilter } from '../prisma/enum-anime-format-filter.input';
import { EnumAnimeStatusFilter } from '../prisma/enum-anime-status-filter.input';
import { AnimeDescriptionCompositeFilter } from '../prisma/anime-description-composite-filter.input';
import { FuzzyDateCompositeFilter } from '../prisma/fuzzy-date-composite-filter.input';
import { EnumAnimeSeasonFilter } from '../prisma/enum-anime-season-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { EnumAnimeSourceFilter } from '../prisma/enum-anime-source-filter.input';
import { AnimeTrailerCompositeFilter } from '../prisma/anime-trailer-composite-filter.input';
import { AnimeScoreProvidersCompositeFilter } from '../prisma/anime-score-providers-composite-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { GenreListRelationFilter } from '../genre/genre-list-relation-filter.input';
import { StudioListRelationFilter } from '../studio/studio-list-relation-filter.input';
import { CharactersOnAnimesListRelationFilter } from '../characters-on-animes/characters-on-animes-list-relation-filter.input';
import { AnimeRelationTypeCompositeFilter } from '../prisma/anime-relation-type-composite-filter.input';
import { EpisodeListRelationFilter } from '../episode/episode-list-relation-filter.input';
import { AnimeBroadcastCompositeFilter } from '../prisma/anime-broadcast-composite-filter.input';
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

    @Field(() => StringFilter, {nullable:true})
    slug?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    malId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    anilistId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    animeSlayerId?: IntNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    xsAnimeId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    animeXId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    animeBlkomId?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    banner?: StringNullableFilter;

    @Field(() => AnimeCoverImageCompositeFilter, {nullable:true})
    cover?: AnimeCoverImageCompositeFilter;

    @Field(() => [AnimeCoverImageObjectEqualityInput], {nullable:true})
    altCovers?: Array<AnimeCoverImageObjectEqualityInput>;

    @Field(() => AnimeTitleCompositeFilter, {nullable:true})
    title?: AnimeTitleCompositeFilter;

    @Field(() => EnumAnimeFormatFilter, {nullable:true})
    format?: EnumAnimeFormatFilter;

    @Field(() => EnumAnimeStatusFilter, {nullable:true})
    status?: EnumAnimeStatusFilter;

    @Field(() => AnimeDescriptionCompositeFilter, {nullable:true})
    description?: AnimeDescriptionCompositeFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    startDate?: FuzzyDateCompositeFilter;

    @Field(() => FuzzyDateCompositeFilter, {nullable:true})
    endDate?: FuzzyDateCompositeFilter;

    @Field(() => EnumAnimeSeasonFilter, {nullable:true})
    season?: EnumAnimeSeasonFilter;

    @Field(() => IntFilter, {nullable:true})
    episodesCount?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    duration?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    countryOfOrigin?: StringFilter;

    @Field(() => BoolFilter, {nullable:true})
    isLicensed?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isAdult?: BoolFilter;

    @Field(() => EnumAnimeSourceFilter, {nullable:true})
    source?: EnumAnimeSourceFilter;

    @Field(() => AnimeTrailerCompositeFilter, {nullable:true})
    trailer?: AnimeTrailerCompositeFilter;

    @Field(() => AnimeScoreProvidersCompositeFilter, {nullable:true})
    score?: AnimeScoreProvidersCompositeFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    openings?: StringNullableListFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    endings?: StringNullableListFilter;

    @Field(() => GenreListRelationFilter, {nullable:true})
    genres?: GenreListRelationFilter;

    @Field(() => StudioListRelationFilter, {nullable:true})
    producers?: StudioListRelationFilter;

    @Field(() => StudioListRelationFilter, {nullable:true})
    studios?: StudioListRelationFilter;

    @Field(() => CharactersOnAnimesListRelationFilter, {nullable:true})
    characters?: CharactersOnAnimesListRelationFilter;

    @Field(() => AnimeRelationTypeCompositeFilter, {nullable:true})
    related?: AnimeRelationTypeCompositeFilter;

    @Field(() => EpisodeListRelationFilter, {nullable:true})
    episodes?: EpisodeListRelationFilter;

    @Field(() => AnimeBroadcastCompositeFilter, {nullable:true})
    broadcast?: AnimeBroadcastCompositeFilter;

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
