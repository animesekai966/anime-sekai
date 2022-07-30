import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
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
import { AnimeScoreProvidersCreateEnvelopeInput } from '../anime-score-providers/anime-score-providers-create-envelope.input';
import { AnimeCreateopeningsInput } from './anime-createopenings.input';
import { AnimeCreateendingsInput } from './anime-createendings.input';
import { AnimeBroadcastCreateEnvelopeInput } from '../anime-broadcast/anime-broadcast-create-envelope.input';
import { GenreCreateNestedManyWithoutAnimesInput } from '../genre/genre-create-nested-many-without-animes.input';
import { EpisodeCreateNestedManyWithoutAnimeInput } from '../episode/episode-create-nested-many-without-anime.input';
import { StudioCreateNestedManyWithoutProducedAnimesInput } from '../studio/studio-create-nested-many-without-produced-animes.input';
import { StudioCreateNestedManyWithoutAnimatedAnimesInput } from '../studio/studio-create-nested-many-without-animated-animes.input';
import { CharacterOnAnimeCreateNestedManyWithoutAnimeInput } from '../character-on-anime/character-on-anime-create-nested-many-without-anime.input';
import { AnimeRelationTypeCreateInput } from '../anime-relation-type/anime-relation-type-create.input';
import { AnimeCreateproducerIDsInput } from './anime-createproducer-i-ds.input';
import { AnimeCreatestudioIDsInput } from './anime-createstudio-i-ds.input';
import { AnimeCreategenreIDsInput } from './anime-creategenre-i-ds.input';

@InputType()
export class AnimeCreateWithoutStaffInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => String, {nullable:true})
    animeXId?: string;

    @Field(() => String, {nullable:true})
    animeBlkomId?: string;

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

    @Field(() => AnimeSeason, {nullable:false})
    season!: keyof typeof AnimeSeason;

    @Field(() => Int, {nullable:false})
    episodesCount!: number;

    @Field(() => Float, {nullable:false})
    duration!: number;

    @Field(() => String, {nullable:false})
    countryOfOrigin!: string;

    @Field(() => Boolean, {nullable:false})
    isLicensed!: boolean;

    @Field(() => Boolean, {nullable:false})
    isAdult!: boolean;

    @Field(() => AgeRating, {nullable:false})
    rating!: keyof typeof AgeRating;

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

    @Field(() => AnimeBroadcastCreateEnvelopeInput, {nullable:false})
    broadcast!: AnimeBroadcastCreateEnvelopeInput;

    @Field(() => GenreCreateNestedManyWithoutAnimesInput, {nullable:true})
    genres?: GenreCreateNestedManyWithoutAnimesInput;

    @Field(() => EpisodeCreateNestedManyWithoutAnimeInput, {nullable:true})
    episodes?: EpisodeCreateNestedManyWithoutAnimeInput;

    @Field(() => StudioCreateNestedManyWithoutProducedAnimesInput, {nullable:true})
    producers?: StudioCreateNestedManyWithoutProducedAnimesInput;

    @Field(() => StudioCreateNestedManyWithoutAnimatedAnimesInput, {nullable:true})
    studios?: StudioCreateNestedManyWithoutAnimatedAnimesInput;

    @Field(() => CharacterOnAnimeCreateNestedManyWithoutAnimeInput, {nullable:true})
    characters?: CharacterOnAnimeCreateNestedManyWithoutAnimeInput;

    @Field(() => [AnimeRelationTypeCreateInput], {nullable:true})
    related?: Array<AnimeRelationTypeCreateInput>;

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
