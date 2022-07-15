import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AnimeCoverUpdateEnvelopeInput } from '../anime-cover/anime-cover-update-envelope.input';
import { AnimeCoverCreateInput } from '../anime-cover/anime-cover-create.input';
import { AnimeTitleUpdateEnvelopeInput } from '../anime-title/anime-title-update-envelope.input';
import { AnimeTrailerNullableUpdateEnvelopeInput } from '../prisma/anime-trailer-nullable-update-envelope.input';
import { EnumAnimeTypeFieldUpdateOperationsInput } from '../prisma/enum-anime-type-field-update-operations.input';
import { FuzzyDateUpdateEnvelopeInput } from '../fuzzy-date/fuzzy-date-update-envelope.input';
import { EnumAgeRatingFieldUpdateOperationsInput } from '../prisma/enum-age-rating-field-update-operations.input';
import { AnimeScoreUpdateEnvelopeInput } from '../anime-score/anime-score-update-envelope.input';
import { EnumAnimeSeasonFieldUpdateOperationsInput } from '../prisma/enum-anime-season-field-update-operations.input';
import { EnumAnimeStatusFieldUpdateOperationsInput } from '../prisma/enum-anime-status-field-update-operations.input';
import { AnimeBroadcastUpdateEnvelopeInput } from '../anime-broadcast/anime-broadcast-update-envelope.input';
import { AnimeDescriptionUpdateEnvelopeInput } from '../anime-description/anime-description-update-envelope.input';
import { AnimeUpdateopeningsInput } from './anime-updateopenings.input';
import { AnimeUpdateendingsInput } from './anime-updateendings.input';
import { RelatedAnimeCreateInput } from '../related-anime/related-anime-create.input';
import { EpisodeCreateInput } from '../episode/episode-create.input';
import { ExternalSiteCreateInput } from '../external-site/external-site-create.input';
import { AnimeStudioUncheckedUpdateManyWithoutAnimesProducedNestedInput } from '../anime-studio/anime-studio-unchecked-update-many-without-animes-produced-nested.input';
import { AnimeGenreUncheckedUpdateManyWithoutAnimesNestedInput } from '../anime-genre/anime-genre-unchecked-update-many-without-animes-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { AnimeUpdategenreIDsInput } from './anime-updategenre-i-ds.input';
import { HideField } from '@nestjs/graphql';
import { AnimeUpdatestudioIDsInput } from './anime-updatestudio-i-ds.input';
import { AnimeUpdateproducerIDsInput } from './anime-updateproducer-i-ds.input';

@InputType()
export class AnimeUncheckedUpdateWithoutStudiosInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    animeXId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    animeifyId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    animeSlayerId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    xsAnimeId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AnimeCoverUpdateEnvelopeInput, {nullable:true})
    cover?: AnimeCoverUpdateEnvelopeInput;

    @Field(() => [AnimeCoverCreateInput], {nullable:true})
    altCovers?: Array<AnimeCoverCreateInput>;

    @Field(() => AnimeTitleUpdateEnvelopeInput, {nullable:true})
    title?: AnimeTitleUpdateEnvelopeInput;

    @Field(() => AnimeTrailerNullableUpdateEnvelopeInput, {nullable:true})
    trailer?: AnimeTrailerNullableUpdateEnvelopeInput;

    @Field(() => EnumAnimeTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAnimeTypeFieldUpdateOperationsInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    startDate?: FuzzyDateUpdateEnvelopeInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    endDate?: FuzzyDateUpdateEnvelopeInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    duration?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAgeRatingFieldUpdateOperationsInput, {nullable:true})
    ageRating?: EnumAgeRatingFieldUpdateOperationsInput;

    @Field(() => AnimeScoreUpdateEnvelopeInput, {nullable:true})
    score?: AnimeScoreUpdateEnvelopeInput;

    @Field(() => EnumAnimeSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: EnumAnimeSeasonFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    source?: StringFieldUpdateOperationsInput;

    @Field(() => EnumAnimeStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAnimeStatusFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    episodesCount?: NullableIntFieldUpdateOperationsInput;

    @Field(() => AnimeBroadcastUpdateEnvelopeInput, {nullable:true})
    broadcast?: AnimeBroadcastUpdateEnvelopeInput;

    @Field(() => AnimeDescriptionUpdateEnvelopeInput, {nullable:true})
    description?: AnimeDescriptionUpdateEnvelopeInput;

    @Field(() => AnimeUpdateopeningsInput, {nullable:true})
    openings?: AnimeUpdateopeningsInput;

    @Field(() => AnimeUpdateendingsInput, {nullable:true})
    endings?: AnimeUpdateendingsInput;

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    related?: Array<RelatedAnimeCreateInput>;

    @Field(() => [EpisodeCreateInput], {nullable:true})
    animeXEpisodes?: Array<EpisodeCreateInput>;

    @Field(() => [EpisodeCreateInput], {nullable:true})
    animeifyEpisodes?: Array<EpisodeCreateInput>;

    @Field(() => [EpisodeCreateInput], {nullable:true})
    xsAnimeEpisodes?: Array<EpisodeCreateInput>;

    @Field(() => [EpisodeCreateInput], {nullable:true})
    animeSlayerEpisodes?: Array<EpisodeCreateInput>;

    @Field(() => [ExternalSiteCreateInput], {nullable:true})
    externalSites?: Array<ExternalSiteCreateInput>;

    @Field(() => AnimeStudioUncheckedUpdateManyWithoutAnimesProducedNestedInput, {nullable:true})
    producers?: AnimeStudioUncheckedUpdateManyWithoutAnimesProducedNestedInput;

    @Field(() => AnimeGenreUncheckedUpdateManyWithoutAnimesNestedInput, {nullable:true})
    genres?: AnimeGenreUncheckedUpdateManyWithoutAnimesNestedInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    episodesUpdatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    isAdult?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput;

    @HideField()
    genreIDs?: AnimeUpdategenreIDsInput;

    @HideField()
    studioIDs?: AnimeUpdatestudioIDsInput;

    @HideField()
    producerIDs?: AnimeUpdateproducerIDsInput;
}
