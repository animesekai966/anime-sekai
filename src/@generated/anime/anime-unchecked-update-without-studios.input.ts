import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { ImageNullableUpdateEnvelopeInput } from '../prisma/image-nullable-update-envelope.input';
import { ImageUpdateEnvelopeInput } from '../image/image-update-envelope.input';
import { ImageCreateInput } from '../image/image-create.input';
import { AnimeTitleUpdateEnvelopeInput } from '../anime-title/anime-title-update-envelope.input';
import { EnumAnimeFormatFieldUpdateOperationsInput } from '../prisma/enum-anime-format-field-update-operations.input';
import { EnumAnimeStatusFieldUpdateOperationsInput } from '../prisma/enum-anime-status-field-update-operations.input';
import { DescriptionUpdateEnvelopeInput } from '../description/description-update-envelope.input';
import { FuzzyDateUpdateEnvelopeInput } from '../fuzzy-date/fuzzy-date-update-envelope.input';
import { EnumAnimeSeasonFieldUpdateOperationsInput } from '../prisma/enum-anime-season-field-update-operations.input';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumAgeRatingFieldUpdateOperationsInput } from '../prisma/enum-age-rating-field-update-operations.input';
import { EnumAnimeSourceFieldUpdateOperationsInput } from '../prisma/enum-anime-source-field-update-operations.input';
import { AnimeTrailerUpdateEnvelopeInput } from '../anime-trailer/anime-trailer-update-envelope.input';
import { AnimeScoreProvidersNullableUpdateEnvelopeInput } from '../prisma/anime-score-providers-nullable-update-envelope.input';
import { AnimeUpdateopeningsInput } from './anime-updateopenings.input';
import { AnimeUpdateendingsInput } from './anime-updateendings.input';
import { AnimeBroadcastNullableUpdateEnvelopeInput } from '../prisma/anime-broadcast-nullable-update-envelope.input';
import { GenreUncheckedUpdateManyWithoutAnimeNestedInput } from '../genre/genre-unchecked-update-many-without-anime-nested.input';
import { EpisodeUncheckedUpdateManyWithoutAnimeNestedInput } from '../episode/episode-unchecked-update-many-without-anime-nested.input';
import { StudioUncheckedUpdateManyWithoutProducedAnimeNestedInput } from '../studio/studio-unchecked-update-many-without-produced-anime-nested.input';
import { CharacterOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput } from '../character-on-anime/character-on-anime-unchecked-update-many-without-anime-nested.input';
import { StaffOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput } from '../staff-on-anime/staff-on-anime-unchecked-update-many-without-anime-nested.input';
import { AnimeRelationTypeCreateInput } from '../anime-relation-type/anime-relation-type-create.input';
import { ExternalLinkCreateInput } from '../external-link/external-link-create.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AnimeUpdateproducerIDsInput } from './anime-updateproducer-i-ds.input';
import { AnimeUpdatestudioIDsInput } from './anime-updatestudio-i-ds.input';
import { AnimeUpdategenreIDsInput } from './anime-updategenre-i-ds.input';

@InputType()
export class AnimeUncheckedUpdateWithoutStudiosInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: NullableIntFieldUpdateOperationsInput;

    @HideField()
    animeXId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => ImageNullableUpdateEnvelopeInput, {nullable:true})
    banner?: ImageNullableUpdateEnvelopeInput;

    @Field(() => ImageUpdateEnvelopeInput, {nullable:true})
    cover?: ImageUpdateEnvelopeInput;

    @Field(() => [ImageCreateInput], {nullable:true})
    altCovers?: Array<ImageCreateInput>;

    @Field(() => AnimeTitleUpdateEnvelopeInput, {nullable:true})
    title?: AnimeTitleUpdateEnvelopeInput;

    @Field(() => EnumAnimeFormatFieldUpdateOperationsInput, {nullable:true})
    format?: EnumAnimeFormatFieldUpdateOperationsInput;

    @Field(() => EnumAnimeStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAnimeStatusFieldUpdateOperationsInput;

    @Field(() => DescriptionUpdateEnvelopeInput, {nullable:true})
    description?: DescriptionUpdateEnvelopeInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    startDate?: FuzzyDateUpdateEnvelopeInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    endDate?: FuzzyDateUpdateEnvelopeInput;

    @Field(() => EnumAnimeSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: EnumAnimeSeasonFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    episodesCount?: NullableIntFieldUpdateOperationsInput;

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    duration?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    countryOfOrigin?: NullableStringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isLicensed?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdult?: BoolFieldUpdateOperationsInput;

    @Field(() => EnumAgeRatingFieldUpdateOperationsInput, {nullable:true})
    rating?: EnumAgeRatingFieldUpdateOperationsInput;

    @Field(() => EnumAnimeSourceFieldUpdateOperationsInput, {nullable:true})
    source?: EnumAnimeSourceFieldUpdateOperationsInput;

    @Field(() => AnimeTrailerUpdateEnvelopeInput, {nullable:true})
    trailer?: AnimeTrailerUpdateEnvelopeInput;

    @Field(() => AnimeScoreProvidersNullableUpdateEnvelopeInput, {nullable:true})
    score?: AnimeScoreProvidersNullableUpdateEnvelopeInput;

    @Field(() => AnimeUpdateopeningsInput, {nullable:true})
    openings?: AnimeUpdateopeningsInput;

    @Field(() => AnimeUpdateendingsInput, {nullable:true})
    endings?: AnimeUpdateendingsInput;

    @Field(() => AnimeBroadcastNullableUpdateEnvelopeInput, {nullable:true})
    broadcast?: AnimeBroadcastNullableUpdateEnvelopeInput;

    @Field(() => GenreUncheckedUpdateManyWithoutAnimeNestedInput, {nullable:true})
    genres?: GenreUncheckedUpdateManyWithoutAnimeNestedInput;

    @Field(() => EpisodeUncheckedUpdateManyWithoutAnimeNestedInput, {nullable:true})
    episodes?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput;

    @Field(() => StudioUncheckedUpdateManyWithoutProducedAnimeNestedInput, {nullable:true})
    producers?: StudioUncheckedUpdateManyWithoutProducedAnimeNestedInput;

    @Field(() => CharacterOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput, {nullable:true})
    characters?: CharacterOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput;

    @Field(() => StaffOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput, {nullable:true})
    staff?: StaffOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput;

    @Field(() => [AnimeRelationTypeCreateInput], {nullable:true})
    related?: Array<AnimeRelationTypeCreateInput>;

    @Field(() => [ExternalLinkCreateInput], {nullable:true})
    externalLinks?: Array<ExternalLinkCreateInput>;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @HideField()
    producerIDs?: AnimeUpdateproducerIDsInput;

    @HideField()
    studioIDs?: AnimeUpdatestudioIDsInput;

    @HideField()
    genreIDs?: AnimeUpdategenreIDsInput;
}
