import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CoverCreateEnvelopeInput } from '../cover/cover-create-envelope.input';
import { CoverCreateInput } from '../cover/cover-create.input';
import { TitleCreateEnvelopeInput } from '../title/title-create-envelope.input';
import { AnimeType } from '../prisma/anime-type.enum';
import { FuzzyDateCreateEnvelopeInput } from '../fuzzy-date/fuzzy-date-create-envelope.input';
import { AgeRating } from '../prisma/age-rating.enum';
import { AnimeScoreCreateEnvelopeInput } from '../anime-score/anime-score-create-envelope.input';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { AnimeBroadcastCreateEnvelopeInput } from '../anime-broadcast/anime-broadcast-create-envelope.input';
import { AnimeDescriptionCreateEnvelopeInput } from '../anime-description/anime-description-create-envelope.input';
import { AnimeCreateopeningsInput } from './anime-createopenings.input';
import { AnimeCreateendingsInput } from './anime-createendings.input';
import { AnimeCreategenreIDsInput } from './anime-creategenre-i-ds.input';
import { AnimeCreatethemesIDsInput } from './anime-createthemes-i-ds.input';
import { AnimeCreatedemographicIDsInput } from './anime-createdemographic-i-ds.input';
import { AnimeCreatestudioIDsInput } from './anime-createstudio-i-ds.input';
import { RelatedAnimeCreateInput } from '../related-anime/related-anime-create.input';
import { EpisodeCreateInput } from '../episode/episode-create.input';
import { ExternalSiteCreateInput } from '../external-site/external-site-create.input';
import { AnimeGenreCreateNestedManyWithoutAnimesInput } from '../anime-genre/anime-genre-create-nested-many-without-animes.input';
import { AnimeThemeCreateNestedManyWithoutAnimesInput } from '../anime-theme/anime-theme-create-nested-many-without-animes.input';
import { AnimeStudioCreateNestedManyWithoutAnimesInput } from '../anime-studio/anime-studio-create-nested-many-without-animes.input';

@InputType()
export class AnimeCreateWithoutDemographicsInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => String, {nullable:false})
    animeXId!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => CoverCreateEnvelopeInput, {nullable:false})
    cover!: CoverCreateEnvelopeInput;

    @Field(() => [CoverCreateInput], {nullable:true})
    altCovers?: Array<CoverCreateInput>;

    @Field(() => TitleCreateEnvelopeInput, {nullable:false})
    title!: TitleCreateEnvelopeInput;

    @Field(() => AnimeType, {nullable:true})
    type?: keyof typeof AnimeType;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    startDate!: FuzzyDateCreateEnvelopeInput;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    endDate!: FuzzyDateCreateEnvelopeInput;

    @Field(() => String, {nullable:false})
    duration!: string;

    @Field(() => AgeRating, {nullable:true})
    ageRating?: keyof typeof AgeRating;

    @Field(() => AnimeScoreCreateEnvelopeInput, {nullable:false})
    score!: AnimeScoreCreateEnvelopeInput;

    @Field(() => AnimeSeason, {nullable:false})
    season!: keyof typeof AnimeSeason;

    @Field(() => AnimeBroadcastCreateEnvelopeInput, {nullable:false})
    broadcast!: AnimeBroadcastCreateEnvelopeInput;

    @Field(() => AnimeDescriptionCreateEnvelopeInput, {nullable:false})
    description!: AnimeDescriptionCreateEnvelopeInput;

    @Field(() => AnimeCreateopeningsInput, {nullable:true})
    openings?: AnimeCreateopeningsInput;

    @Field(() => AnimeCreateendingsInput, {nullable:true})
    endings?: AnimeCreateendingsInput;

    @Field(() => AnimeCreategenreIDsInput, {nullable:true})
    genreIDs?: AnimeCreategenreIDsInput;

    @Field(() => AnimeCreatethemesIDsInput, {nullable:true})
    themesIDs?: AnimeCreatethemesIDsInput;

    @Field(() => AnimeCreatedemographicIDsInput, {nullable:true})
    demographicIDs?: AnimeCreatedemographicIDsInput;

    @Field(() => AnimeCreatestudioIDsInput, {nullable:true})
    studioIDs?: AnimeCreatestudioIDsInput;

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    related?: Array<RelatedAnimeCreateInput>;

    @Field(() => [RelatedAnimeCreateInput], {nullable:true})
    recommendations?: Array<RelatedAnimeCreateInput>;

    @Field(() => [EpisodeCreateInput], {nullable:true})
    episodes?: Array<EpisodeCreateInput>;

    @Field(() => [ExternalSiteCreateInput], {nullable:true})
    externalSites?: Array<ExternalSiteCreateInput>;

    @Field(() => AnimeGenreCreateNestedManyWithoutAnimesInput, {nullable:true})
    genres?: AnimeGenreCreateNestedManyWithoutAnimesInput;

    @Field(() => AnimeThemeCreateNestedManyWithoutAnimesInput, {nullable:true})
    themes?: AnimeThemeCreateNestedManyWithoutAnimesInput;

    @Field(() => AnimeStudioCreateNestedManyWithoutAnimesInput, {nullable:true})
    studios?: AnimeStudioCreateNestedManyWithoutAnimesInput;
}
