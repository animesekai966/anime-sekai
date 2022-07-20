import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeCoverImageCreateEnvelopeInput } from '../anime-cover-image/anime-cover-image-create-envelope.input';
import { AnimeCoverImageCreateInput } from '../anime-cover-image/anime-cover-image-create.input';
import { AnimeTitleCreateEnvelopeInput } from '../anime-title/anime-title-create-envelope.input';
import { AnimeFormat } from '../prisma/anime-format.enum';
import { AnimeStatus } from '../prisma/anime-status.enum';
import { AnimeDescriptionCreateEnvelopeInput } from '../anime-description/anime-description-create-envelope.input';
import { FuzzyDateCreateEnvelopeInput } from '../fuzzy-date/fuzzy-date-create-envelope.input';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { AnimeSource } from '../prisma/anime-source.enum';
import { AnimeTrailerCreateEnvelopeInput } from '../anime-trailer/anime-trailer-create-envelope.input';
import { AnimeScoreProvidersCreateEnvelopeInput } from '../anime-score-providers/anime-score-providers-create-envelope.input';
import { AnimeCreateopeningsInput } from './anime-createopenings.input';
import { AnimeCreateendingsInput } from './anime-createendings.input';
import { GenreCreateNestedManyWithoutAnimesInput } from '../genre/genre-create-nested-many-without-animes.input';
import { StudioCreateNestedManyWithoutProducedAnimesInput } from '../studio/studio-create-nested-many-without-produced-animes.input';
import { CharactersOnAnimesCreateNestedManyWithoutAnimeInput } from '../characters-on-animes/characters-on-animes-create-nested-many-without-anime.input';
import { AnimeCreateproducerIDsInput } from './anime-createproducer-i-ds.input';
import { AnimeCreatestudioIDsInput } from './anime-createstudio-i-ds.input';
import { AnimeCreategenreIDsInput } from './anime-creategenre-i-ds.input';

@InputType()
export class AnimeCreateWithoutStudiosInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:false})
    anilistId!: number;

    @Field(() => String, {nullable:false})
    animeifyId!: string;

    @Field(() => Int, {nullable:false})
    animeSlayerId!: number;

    @Field(() => String, {nullable:false})
    xsAnimeId!: string;

    @Field(() => String, {nullable:false})
    animeBlkomId!: string;

    @Field(() => String, {nullable:true})
    banner?: string;

    @Field(() => AnimeCoverImageCreateEnvelopeInput, {nullable:false})
    cover!: AnimeCoverImageCreateEnvelopeInput;

    @Field(() => [AnimeCoverImageCreateInput], {nullable:true})
    altCovers?: Array<AnimeCoverImageCreateInput>;

    @Field(() => AnimeTitleCreateEnvelopeInput, {nullable:false})
    title!: AnimeTitleCreateEnvelopeInput;

    @Field(() => AnimeFormat, {nullable:true})
    format?: keyof typeof AnimeFormat;

    @Field(() => AnimeStatus, {nullable:true})
    status?: keyof typeof AnimeStatus;

    @Field(() => AnimeDescriptionCreateEnvelopeInput, {nullable:false})
    description!: AnimeDescriptionCreateEnvelopeInput;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    startDate!: FuzzyDateCreateEnvelopeInput;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    endDate!: FuzzyDateCreateEnvelopeInput;

    @Field(() => AnimeSeason, {nullable:false})
    season!: keyof typeof AnimeSeason;

    @Field(() => Int, {nullable:false})
    episodesCount!: number;

    @Field(() => Int, {nullable:false})
    duration!: number;

    @Field(() => String, {nullable:false})
    countryOfOrigin!: string;

    @Field(() => Boolean, {nullable:false})
    isLicensed!: boolean;

    @Field(() => Boolean, {nullable:false})
    isAdult!: boolean;

    @Field(() => AnimeSource, {nullable:false})
    source!: keyof typeof AnimeSource;

    @Field(() => AnimeTrailerCreateEnvelopeInput, {nullable:false})
    trailer!: AnimeTrailerCreateEnvelopeInput;

    @Field(() => AnimeScoreProvidersCreateEnvelopeInput, {nullable:false})
    score!: AnimeScoreProvidersCreateEnvelopeInput;

    @Field(() => AnimeCreateopeningsInput, {nullable:true})
    openings?: AnimeCreateopeningsInput;

    @Field(() => AnimeCreateendingsInput, {nullable:true})
    endings?: AnimeCreateendingsInput;

    @Field(() => GenreCreateNestedManyWithoutAnimesInput, {nullable:true})
    genres?: GenreCreateNestedManyWithoutAnimesInput;

    @Field(() => StudioCreateNestedManyWithoutProducedAnimesInput, {nullable:true})
    producers?: StudioCreateNestedManyWithoutProducedAnimesInput;

    @Field(() => CharactersOnAnimesCreateNestedManyWithoutAnimeInput, {nullable:true})
    characters?: CharactersOnAnimesCreateNestedManyWithoutAnimeInput;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => AnimeCreateproducerIDsInput, {nullable:true})
    producerIDs?: AnimeCreateproducerIDsInput;

    @Field(() => AnimeCreatestudioIDsInput, {nullable:true})
    studioIDs?: AnimeCreatestudioIDsInput;

    @Field(() => AnimeCreategenreIDsInput, {nullable:true})
    genreIDs?: AnimeCreategenreIDsInput;
}
