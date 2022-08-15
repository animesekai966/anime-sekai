import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { ImageNullableCreateEnvelopeInput } from '../prisma/image-nullable-create-envelope.input';
import { ImageCreateEnvelopeInput } from '../image/image-create-envelope.input';
import { ImageCreateInput } from '../image/image-create.input';
import { AnimeTitleCreateEnvelopeInput } from '../anime-title/anime-title-create-envelope.input';
import { AnimeFormat } from '../prisma/anime-format.enum';
import { AnimeStatus } from '../prisma/anime-status.enum';
import { DescriptionCreateEnvelopeInput } from '../description/description-create-envelope.input';
import { FuzzyDateCreateEnvelopeInput } from '../fuzzy-date/fuzzy-date-create-envelope.input';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { Float } from '@nestjs/graphql';
import { AgeRating } from '../prisma/age-rating.enum';
import { AnimeSource } from '../prisma/anime-source.enum';
import { AnimeTrailerCreateEnvelopeInput } from '../anime-trailer/anime-trailer-create-envelope.input';
import { AnimeScoreProvidersNullableCreateEnvelopeInput } from '../prisma/anime-score-providers-nullable-create-envelope.input';
import { AnimeCreateopeningsInput } from './anime-createopenings.input';
import { AnimeCreateendingsInput } from './anime-createendings.input';
import { AnimeBroadcastNullableCreateEnvelopeInput } from '../prisma/anime-broadcast-nullable-create-envelope.input';
import { AnimeRelationTypeCreateInput } from '../anime-relation-type/anime-relation-type-create.input';
import { AnimeCreaterecommendationsInput } from './anime-createrecommendations.input';
import { ExternalLinkCreateInput } from '../external-link/external-link-create.input';
import { AnimeCreateproducerIDsInput } from './anime-createproducer-i-ds.input';
import { AnimeCreatestudioIDsInput } from './anime-createstudio-i-ds.input';
import { AnimeCreategenreIDsInput } from './anime-creategenre-i-ds.input';

@InputType()
export class AnimeCreateManyInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @HideField()
    animeXId?: string;

    @Field(() => ImageNullableCreateEnvelopeInput, {nullable:true})
    banner?: ImageNullableCreateEnvelopeInput;

    @Field(() => ImageCreateEnvelopeInput, {nullable:false})
    cover!: ImageCreateEnvelopeInput;

    @Field(() => [ImageCreateInput], {nullable:true})
    altCovers?: Array<ImageCreateInput>;

    @Field(() => AnimeTitleCreateEnvelopeInput, {nullable:false})
    title!: AnimeTitleCreateEnvelopeInput;

    @Field(() => AnimeFormat, {nullable:true})
    format?: keyof typeof AnimeFormat;

    @Field(() => AnimeStatus, {nullable:true})
    status?: keyof typeof AnimeStatus;

    @Field(() => DescriptionCreateEnvelopeInput, {nullable:false})
    description!: DescriptionCreateEnvelopeInput;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    startDate!: FuzzyDateCreateEnvelopeInput;

    @Field(() => FuzzyDateCreateEnvelopeInput, {nullable:false})
    endDate!: FuzzyDateCreateEnvelopeInput;

    @Field(() => AnimeSeason, {nullable:true})
    season?: keyof typeof AnimeSeason;

    @Field(() => Int, {nullable:true})
    episodesCount?: number;

    @Field(() => Float, {nullable:true})
    duration?: number;

    @Field(() => String, {nullable:true})
    countryOfOrigin?: string;

    @Field(() => Boolean, {nullable:false})
    isLicensed!: boolean;

    @Field(() => Boolean, {nullable:false})
    isAdult!: boolean;

    @Field(() => AgeRating, {nullable:true})
    rating?: keyof typeof AgeRating;

    @Field(() => AnimeSource, {nullable:false})
    source!: keyof typeof AnimeSource;

    @Field(() => AnimeTrailerCreateEnvelopeInput, {nullable:false})
    trailer!: AnimeTrailerCreateEnvelopeInput;

    @Field(() => AnimeScoreProvidersNullableCreateEnvelopeInput, {nullable:true})
    score?: AnimeScoreProvidersNullableCreateEnvelopeInput;

    @Field(() => AnimeCreateopeningsInput, {nullable:true})
    openings?: AnimeCreateopeningsInput;

    @Field(() => AnimeCreateendingsInput, {nullable:true})
    endings?: AnimeCreateendingsInput;

    @Field(() => AnimeBroadcastNullableCreateEnvelopeInput, {nullable:true})
    broadcast?: AnimeBroadcastNullableCreateEnvelopeInput;

    @Field(() => [AnimeRelationTypeCreateInput], {nullable:true})
    related?: Array<AnimeRelationTypeCreateInput>;

    @Field(() => AnimeCreaterecommendationsInput, {nullable:true})
    recommendations?: AnimeCreaterecommendationsInput;

    @Field(() => [ExternalLinkCreateInput], {nullable:true})
    externalLinks?: Array<ExternalLinkCreateInput>;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @HideField()
    producerIDs?: AnimeCreateproducerIDsInput;

    @HideField()
    studioIDs?: AnimeCreatestudioIDsInput;

    @HideField()
    genreIDs?: AnimeCreategenreIDsInput;
}
