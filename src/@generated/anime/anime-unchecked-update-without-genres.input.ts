import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AnimeCoverImageUpdateEnvelopeInput } from '../anime-cover-image/anime-cover-image-update-envelope.input';
import { AnimeCoverImageCreateInput } from '../anime-cover-image/anime-cover-image-create.input';
import { AnimeTitleUpdateEnvelopeInput } from '../anime-title/anime-title-update-envelope.input';
import { EnumAnimeFormatFieldUpdateOperationsInput } from '../prisma/enum-anime-format-field-update-operations.input';
import { EnumAnimeStatusFieldUpdateOperationsInput } from '../prisma/enum-anime-status-field-update-operations.input';
import { AnimeDescriptionUpdateEnvelopeInput } from '../anime-description/anime-description-update-envelope.input';
import { FuzzyDateUpdateEnvelopeInput } from '../fuzzy-date/fuzzy-date-update-envelope.input';
import { EnumAnimeSeasonFieldUpdateOperationsInput } from '../prisma/enum-anime-season-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { EnumAnimeSourceFieldUpdateOperationsInput } from '../prisma/enum-anime-source-field-update-operations.input';
import { AnimeTrailerUpdateEnvelopeInput } from '../anime-trailer/anime-trailer-update-envelope.input';
import { AnimeScoreProvidersUpdateEnvelopeInput } from '../anime-score-providers/anime-score-providers-update-envelope.input';
import { AnimeUpdateopeningsInput } from './anime-updateopenings.input';
import { AnimeUpdateendingsInput } from './anime-updateendings.input';
import { StudioUncheckedUpdateManyWithoutProducedAnimesNestedInput } from '../studio/studio-unchecked-update-many-without-produced-animes-nested.input';
import { StudioUncheckedUpdateManyWithoutAnimatedAnimesNestedInput } from '../studio/studio-unchecked-update-many-without-animated-animes-nested.input';
import { CharactersOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput } from '../characters-on-animes/characters-on-animes-unchecked-update-many-without-anime-nested.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { AnimeUpdateproducerIDsInput } from './anime-updateproducer-i-ds.input';
import { AnimeUpdatestudioIDsInput } from './anime-updatestudio-i-ds.input';
import { AnimeUpdategenreIDsInput } from './anime-updategenre-i-ds.input';

@InputType()
export class AnimeUncheckedUpdateWithoutGenresInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    slug?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    animeifyId?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    animeSlayerId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    xsAnimeId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    animeBlkomId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AnimeCoverImageUpdateEnvelopeInput, {nullable:true})
    cover?: AnimeCoverImageUpdateEnvelopeInput;

    @Field(() => [AnimeCoverImageCreateInput], {nullable:true})
    altCovers?: Array<AnimeCoverImageCreateInput>;

    @Field(() => AnimeTitleUpdateEnvelopeInput, {nullable:true})
    title?: AnimeTitleUpdateEnvelopeInput;

    @Field(() => EnumAnimeFormatFieldUpdateOperationsInput, {nullable:true})
    format?: EnumAnimeFormatFieldUpdateOperationsInput;

    @Field(() => EnumAnimeStatusFieldUpdateOperationsInput, {nullable:true})
    status?: EnumAnimeStatusFieldUpdateOperationsInput;

    @Field(() => AnimeDescriptionUpdateEnvelopeInput, {nullable:true})
    description?: AnimeDescriptionUpdateEnvelopeInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    startDate?: FuzzyDateUpdateEnvelopeInput;

    @Field(() => FuzzyDateUpdateEnvelopeInput, {nullable:true})
    endDate?: FuzzyDateUpdateEnvelopeInput;

    @Field(() => EnumAnimeSeasonFieldUpdateOperationsInput, {nullable:true})
    season?: EnumAnimeSeasonFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    episodesCount?: IntFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    duration?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    countryOfOrigin?: StringFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isLicensed?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isAdult?: BoolFieldUpdateOperationsInput;

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

    @Field(() => StudioUncheckedUpdateManyWithoutProducedAnimesNestedInput, {nullable:true})
    producers?: StudioUncheckedUpdateManyWithoutProducedAnimesNestedInput;

    @Field(() => StudioUncheckedUpdateManyWithoutAnimatedAnimesNestedInput, {nullable:true})
    studios?: StudioUncheckedUpdateManyWithoutAnimatedAnimesNestedInput;

    @Field(() => CharactersOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput, {nullable:true})
    characters?: CharactersOnAnimesUncheckedUpdateManyWithoutAnimeNestedInput;

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
