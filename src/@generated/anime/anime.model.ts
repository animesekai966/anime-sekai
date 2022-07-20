import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeCoverImage } from '../anime-cover-image/anime-cover-image.model';
import { AnimeTitle } from '../anime-title/anime-title.model';
import { AnimeFormat } from '../prisma/anime-format.enum';
import { AnimeStatus } from '../prisma/anime-status.enum';
import { AnimeDescription } from '../anime-description/anime-description.model';
import { FuzzyDate } from '../fuzzy-date/fuzzy-date.model';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { AnimeSource } from '../prisma/anime-source.enum';
import { AnimeTrailer } from '../anime-trailer/anime-trailer.model';
import { AnimeScoreProviders } from '../anime-score-providers/anime-score-providers.model';
import { Genre } from '../genre/genre.model';
import { Studio } from '../studio/studio.model';
import { CharactersOnAnimes } from '../characters-on-animes/characters-on-animes.model';
import { AnimeCount } from './anime-count.output';

@ObjectType()
export class Anime {

    @Field(() => ID, {nullable:false})
    id!: string;

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
    banner!: string | null;

    @Field(() => AnimeCoverImage, {nullable:false})
    cover?: AnimeCoverImage;

    @Field(() => [AnimeCoverImage], {nullable:true})
    altCovers?: Array<AnimeCoverImage>;

    @Field(() => AnimeTitle, {nullable:false})
    title?: AnimeTitle;

    @Field(() => AnimeFormat, {nullable:false,defaultValue:'TV'})
    format!: keyof typeof AnimeFormat;

    @Field(() => AnimeStatus, {nullable:false,defaultValue:'RELEASING'})
    status!: keyof typeof AnimeStatus;

    @Field(() => AnimeDescription, {nullable:false})
    description?: AnimeDescription;

    @Field(() => FuzzyDate, {nullable:false})
    startDate?: FuzzyDate;

    @Field(() => FuzzyDate, {nullable:false})
    endDate?: FuzzyDate;

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

    @Field(() => AnimeTrailer, {nullable:false})
    trailer?: AnimeTrailer;

    @Field(() => AnimeScoreProviders, {nullable:false})
    score?: AnimeScoreProviders;

    @Field(() => [String], {nullable:true})
    openings!: Array<string>;

    @Field(() => [String], {nullable:true})
    endings!: Array<string>;

    @Field(() => [Genre], {nullable:true})
    genres?: Array<Genre>;

    @Field(() => [Studio], {nullable:true})
    producers?: Array<Studio>;

    @Field(() => [Studio], {nullable:true})
    studios?: Array<Studio>;

    @Field(() => [CharactersOnAnimes], {nullable:true})
    characters?: Array<CharactersOnAnimes>;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => [String], {nullable:true})
    producerIDs!: Array<string>;

    @Field(() => [String], {nullable:true})
    studioIDs!: Array<string>;

    @Field(() => [String], {nullable:true})
    genreIDs!: Array<string>;

    @Field(() => AnimeCount, {nullable:false})
    _count?: AnimeCount;
}
