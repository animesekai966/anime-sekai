import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { ImageNullableUpdateEnvelopeInput } from '../prisma/image-nullable-update-envelope.input';
import { ImageUpdateEnvelopeInput } from '../image/image-update-envelope.input';
import { ImageCreateInput } from '../image/image-create.input';
import { AnimeTitleUpdateEnvelopeInput } from '../anime-title/anime-title-update-envelope.input';
import { EnumAnimeFormatFieldUpdateOperationsInput } from '../prisma/enum-anime-format-field-update-operations.input';
import { EnumAnimeStatusFieldUpdateOperationsInput } from '../prisma/enum-anime-status-field-update-operations.input';
import { DescriptionUpdateEnvelopeInput } from '../description/description-update-envelope.input';
import { FuzzyDateUpdateEnvelopeInput } from '../fuzzy-date/fuzzy-date-update-envelope.input';
import { EnumAnimeSeasonFieldUpdateOperationsInput } from '../prisma/enum-anime-season-field-update-operations.input';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumAgeRatingFieldUpdateOperationsInput } from '../prisma/enum-age-rating-field-update-operations.input';
import { EnumAnimeSourceFieldUpdateOperationsInput } from '../prisma/enum-anime-source-field-update-operations.input';
import { AnimeTrailerUpdateEnvelopeInput } from '../anime-trailer/anime-trailer-update-envelope.input';
import { AnimeScoreProvidersUpdateEnvelopeInput } from '../anime-score-providers/anime-score-providers-update-envelope.input';
import { AnimeUpdateopeningsInput } from './anime-updateopenings.input';
import { AnimeUpdateendingsInput } from './anime-updateendings.input';
import { AnimeBroadcastUpdateEnvelopeInput } from '../anime-broadcast/anime-broadcast-update-envelope.input';
import { GenreUncheckedUpdateManyWithoutAnimesNestedInput } from '../genre/genre-unchecked-update-many-without-animes-nested.input';
import { EpisodeUncheckedUpdateManyWithoutAnimeNestedInput } from '../episode/episode-unchecked-update-many-without-anime-nested.input';
import { StudioUncheckedUpdateManyWithoutProducedAnimesNestedInput } from '../studio/studio-unchecked-update-many-without-produced-animes-nested.input';
import { StudioUncheckedUpdateManyWithoutAnimatedAnimesNestedInput } from '../studio/studio-unchecked-update-many-without-animated-animes-nested.input';
import { CharacterOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput } from '../character-on-anime/character-on-anime-unchecked-update-many-without-anime-nested.input';
import { AnimeRelationTypeCreateInput } from '../anime-relation-type/anime-relation-type-create.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AnimeUpdateproducerIDsInput } from './anime-updateproducer-i-ds.input';
import { AnimeUpdatestudioIDsInput } from './anime-updatestudio-i-ds.input';
import { AnimeUpdategenreIDsInput } from './anime-updategenre-i-ds.input';

@InputType()
export class AnimeUncheckedUpdateWithoutStaffInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    animeXId?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    animeBlkomId?: NullableStringFieldUpdateOperationsInput;

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

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    episodesCount?: IntFieldUpdateOperationsInput;

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    duration?: FloatFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfOrigin?: StringFieldUpdateOperationsInput;

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

    @Field(() => AnimeScoreProvidersUpdateEnvelopeInput, {nullable:true})
    score?: AnimeScoreProvidersUpdateEnvelopeInput;

    @Field(() => AnimeUpdateopeningsInput, {nullable:true})
    openings?: AnimeUpdateopeningsInput;

    @Field(() => AnimeUpdateendingsInput, {nullable:true})
    endings?: AnimeUpdateendingsInput;

    @Field(() => AnimeBroadcastUpdateEnvelopeInput, {nullable:true})
    broadcast?: AnimeBroadcastUpdateEnvelopeInput;

    @Field(() => GenreUncheckedUpdateManyWithoutAnimesNestedInput, {nullable:true})
    genres?: GenreUncheckedUpdateManyWithoutAnimesNestedInput;

    @Field(() => EpisodeUncheckedUpdateManyWithoutAnimeNestedInput, {nullable:true})
    episodes?: EpisodeUncheckedUpdateManyWithoutAnimeNestedInput;

    @Field(() => StudioUncheckedUpdateManyWithoutProducedAnimesNestedInput, {nullable:true})
    producers?: StudioUncheckedUpdateManyWithoutProducedAnimesNestedInput;

    @Field(() => StudioUncheckedUpdateManyWithoutAnimatedAnimesNestedInput, {nullable:true})
    studios?: StudioUncheckedUpdateManyWithoutAnimatedAnimesNestedInput;

    @Field(() => CharacterOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput, {nullable:true})
    characters?: CharacterOnAnimeUncheckedUpdateManyWithoutAnimeNestedInput;

    @Field(() => [AnimeRelationTypeCreateInput], {nullable:true})
    related?: Array<AnimeRelationTypeCreateInput>;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    updatedAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => AnimeUpdateproducerIDsInput, {nullable:true})
    producerIDs?: AnimeUpdateproducerIDsInput;

    @Field(() => AnimeUpdatestudioIDsInput, {nullable:true})
    studioIDs?: AnimeUpdatestudioIDsInput;

    @Field(() => AnimeUpdategenreIDsInput, {nullable:true})
    genreIDs?: AnimeUpdategenreIDsInput;
}