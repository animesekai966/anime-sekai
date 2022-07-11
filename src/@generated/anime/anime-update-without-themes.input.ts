import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CoverUpdateEnvelopeInput } from '../cover/cover-update-envelope.input';
import { CoverCreateInput } from '../cover/cover-create.input';
import { TitleUpdateEnvelopeInput } from '../title/title-update-envelope.input';
import { EnumAnimeTypeFieldUpdateOperationsInput } from '../prisma/enum-anime-type-field-update-operations.input';
import { FuzzyDateUpdateEnvelopeInput } from '../fuzzy-date/fuzzy-date-update-envelope.input';
import { EnumAgeRatingFieldUpdateOperationsInput } from '../prisma/enum-age-rating-field-update-operations.input';
import { AnimeScoreUpdateEnvelopeInput } from '../anime-score/anime-score-update-envelope.input';
import { EnumAnimeSeasonFieldUpdateOperationsInput } from '../prisma/enum-anime-season-field-update-operations.input';
import { AnimeBroadcastUpdateEnvelopeInput } from '../anime-broadcast/anime-broadcast-update-envelope.input';
import { AnimeDescriptionUpdateEnvelopeInput } from '../anime-description/anime-description-update-envelope.input';
import { AnimeUpdateopeningsInput } from './anime-updateopenings.input';
import { AnimeUpdateendingsInput } from './anime-updateendings.input';
import { AnimeUpdategenreIDsInput } from './anime-updategenre-i-ds.input';
import { AnimeUpdatethemesIDsInput } from './anime-updatethemes-i-ds.input';
import { AnimeUpdatedemographicIDsInput } from './anime-updatedemographic-i-ds.input';
import { AnimeUpdatestudioIDsInput } from './anime-updatestudio-i-ds.input';
import { RelatedAnimeCreateInput } from '../related-anime/related-anime-create.input';
import { EpisodeCreateInput } from '../episode/episode-create.input';
import { ExternalSiteCreateInput } from '../external-site/external-site-create.input';
import { AnimeGenreUpdateManyWithoutAnimesNestedInput } from '../anime-genre/anime-genre-update-many-without-animes-nested.input';
import { AnimeDemographicUpdateManyWithoutAnimesNestedInput } from '../anime-demographic/anime-demographic-update-many-without-animes-nested.input';
import { AnimeStudioUpdateManyWithoutAnimesNestedInput } from '../anime-studio/anime-studio-update-many-without-animes-nested.input';

@InputType()
export class AnimeUpdateWithoutThemesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    animeXId?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    banner?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CoverUpdateEnvelopeInput, {nullable:true})
    cover?: CoverUpdateEnvelopeInput;

    @Field(() => [CoverCreateInput], {nullable:true})
    altCovers?: Array<CoverCreateInput>;

    @Field(() => TitleUpdateEnvelopeInput, {nullable:true})
    title?: TitleUpdateEnvelopeInput;

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

    @Field(() => AnimeUpdatethemesIDsInput, {nullable:true})
    themesIDs?: AnimeUpdatethemesIDsInput;

    @Field(() => AnimeUpdatedemographicIDsInput, {nullable:true})
    demographicIDs?: AnimeUpdatedemographicIDsInput;

    @Field(() => AnimeUpdatestudioIDsInput, {nullable:true})
    studioIDs?: AnimeUpdatestudioIDsInput;

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    related?: Array<RelatedAnimeCreateInput>;

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    recommendations?: Array<RelatedAnimeCreateInput>;

    @Field(() => [EpisodeCreateInput], {nullable:true})
    episodes?: Array<EpisodeCreateInput>;

    @Field(() => [ExternalSiteCreateInput], {nullable:true})
    externalSites?: Array<ExternalSiteCreateInput>;

    @Field(() => AnimeGenreUpdateManyWithoutAnimesNestedInput, {nullable:true})
    genres?: AnimeGenreUpdateManyWithoutAnimesNestedInput;

    @Field(() => AnimeDemographicUpdateManyWithoutAnimesNestedInput, {nullable:true})
    demographics?: AnimeDemographicUpdateManyWithoutAnimesNestedInput;

    @Field(() => AnimeStudioUpdateManyWithoutAnimesNestedInput, {nullable:true})
    studios?: AnimeStudioUpdateManyWithoutAnimesNestedInput;
}
