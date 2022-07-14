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
import { AnimeUpdategenreIDsInput } from './anime-updategenre-i-ds.input';
import { AnimeUpdatestudioIDsInput } from './anime-updatestudio-i-ds.input';
import { AnimeUpdateproducerIDsInput } from './anime-updateproducer-i-ds.input';
import { RelatedAnimeCreateInput } from '../related-anime/related-anime-create.input';
import { EpisodeCreateInput } from '../episode/episode-create.input';
import { ExternalSiteCreateInput } from '../external-site/external-site-create.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';

@InputType()
export class AnimeUpdateManyMutationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    animeXId?: StringFieldUpdateOperationsInput;

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

    @Field(() => AnimeUpdategenreIDsInput, {nullable:true})
    genreIDs?: AnimeUpdategenreIDsInput;

    @Field(() => AnimeUpdatestudioIDsInput, {nullable:true})
    studioIDs?: AnimeUpdatestudioIDsInput;

    @Field(() => AnimeUpdateproducerIDsInput, {nullable:true})
    producerIDs?: AnimeUpdateproducerIDsInput;

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    related?: Array<RelatedAnimeCreateInput>;

    @Field(() => [EpisodeCreateInput], {nullable:true})
    episodes?: Array<EpisodeCreateInput>;

    @Field(() => [ExternalSiteCreateInput], {nullable:true})
    externalSites?: Array<ExternalSiteCreateInput>;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    episodesUpdatedAt?: DateTimeFieldUpdateOperationsInput;
}
