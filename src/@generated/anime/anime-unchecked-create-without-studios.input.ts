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
import { GenreUncheckedCreateNestedManyWithoutAnimesInput } from '../genre/genre-unchecked-create-nested-many-without-animes.input';
import { StudioUncheckedCreateNestedManyWithoutProducedAnimesInput } from '../studio/studio-unchecked-create-nested-many-without-produced-animes.input';
import { CharactersOnAnimesUncheckedCreateNestedManyWithoutAnimeInput } from '../characters-on-animes/characters-on-animes-unchecked-create-nested-many-without-anime.input';
import { AnimeRelationTypeCreateEnvelopeInput } from '../anime-relation-type/anime-relation-type-create-envelope.input';
import { EpisodeUncheckedCreateNestedManyWithoutAnimeInput } from '../episode/episode-unchecked-create-nested-many-without-anime.input';
import { AnimeBroadcastCreateEnvelopeInput } from '../anime-broadcast/anime-broadcast-create-envelope.input';
import { AnimeCreateproducerIDsInput } from './anime-createproducer-i-ds.input';
import { AnimeCreatestudioIDsInput } from './anime-createstudio-i-ds.input';
import { AnimeCreategenreIDsInput } from './anime-creategenre-i-ds.input';

@InputType()
export class AnimeUncheckedCreateWithoutStudiosInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => Int, {nullable:true})
    animeSlayerId?: number;

    @Field(() => String, {nullable:true})
    xsAnimeId?: string;

    @Field(() => String, {nullable:true})
    animeXId?: string;

    @Field(() => String, {nullable:true})
    animeBlkomId?: string;

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

    @Field(() => GenreUncheckedCreateNestedManyWithoutAnimesInput, {nullable:true})
    genres?: GenreUncheckedCreateNestedManyWithoutAnimesInput;

    @Field(() => StudioUncheckedCreateNestedManyWithoutProducedAnimesInput, {nullable:true})
    producers?: StudioUncheckedCreateNestedManyWithoutProducedAnimesInput;

    @Field(() => CharactersOnAnimesUncheckedCreateNestedManyWithoutAnimeInput, {nullable:true})
    characters?: CharactersOnAnimesUncheckedCreateNestedManyWithoutAnimeInput;

    @Field(() => AnimeRelationTypeCreateEnvelopeInput, {nullable:false})
    related!: AnimeRelationTypeCreateEnvelopeInput;

    @Field(() => EpisodeUncheckedCreateNestedManyWithoutAnimeInput, {nullable:true})
    episodes?: EpisodeUncheckedCreateNestedManyWithoutAnimeInput;

    @Field(() => AnimeBroadcastCreateEnvelopeInput, {nullable:false})
    broadcast!: AnimeBroadcastCreateEnvelopeInput;

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
