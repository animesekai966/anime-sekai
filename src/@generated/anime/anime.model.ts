import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AnimeCover } from '../anime-cover/anime-cover.model';
import { AnimeTitle } from '../anime-title/anime-title.model';
import { AnimeTrailer } from '../anime-trailer/anime-trailer.model';
import { AnimeType } from '../prisma/anime-type.enum';
import { FuzzyDate } from '../fuzzy-date/fuzzy-date.model';
import { AgeRating } from '../prisma/age-rating.enum';
import { AnimeScore } from '../anime-score/anime-score.model';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { AnimeStatus } from '../prisma/anime-status.enum';
import { AnimeBroadcast } from '../anime-broadcast/anime-broadcast.model';
import { AnimeDescription } from '../anime-description/anime-description.model';
import { RelatedAnime } from '../related-anime/related-anime.model';
import { Episode } from '../episode/episode.model';
import { ExternalSite } from '../external-site/external-site.model';
import { AnimeStudio } from '../anime-studio/anime-studio.model';
import { AnimeGenre } from '../anime-genre/anime-genre.model';
import { AnimeCount } from './anime-count.output';

@ObjectType()
export class Anime {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:true})
    anilistId!: number | null;

    @Field(() => String, {nullable:false})
    animeXId!: string;

    @Field(() => String, {nullable:true})
    banner!: string | null;

    @Field(() => AnimeCover, {nullable:false})
    cover?: AnimeCover;

    @Field(() => [AnimeCover], {nullable:true})
    altCovers?: Array<AnimeCover>;

    @Field(() => AnimeTitle, {nullable:false})
    title?: AnimeTitle;

    @Field(() => AnimeTrailer, {nullable:true})
    trailer?: AnimeTrailer | null;

    @Field(() => AnimeType, {nullable:false,defaultValue:'TV'})
    type!: keyof typeof AnimeType;

    @Field(() => FuzzyDate, {nullable:false})
    startDate?: FuzzyDate;

    @Field(() => FuzzyDate, {nullable:false})
    endDate?: FuzzyDate;

    @Field(() => String, {nullable:false})
    duration!: string;

    @Field(() => AgeRating, {nullable:false,defaultValue:'PG13'})
    ageRating!: keyof typeof AgeRating;

    @Field(() => AnimeScore, {nullable:false})
    score?: AnimeScore;

    @Field(() => AnimeSeason, {nullable:false})
    season!: keyof typeof AnimeSeason;

    @Field(() => String, {nullable:false})
    source!: string;

    @Field(() => AnimeStatus, {nullable:false,defaultValue:'FINISHED_AIRING'})
    status!: keyof typeof AnimeStatus;

    @Field(() => Int, {nullable:true})
    episodesCount!: number | null;

    @Field(() => AnimeBroadcast, {nullable:false})
    broadcast?: AnimeBroadcast;

    @Field(() => AnimeDescription, {nullable:false})
    description?: AnimeDescription;

    @Field(() => [String], {nullable:true})
    openings!: Array<string>;

    @Field(() => [String], {nullable:true})
    endings!: Array<string>;

    @Field(() => [String], {nullable:true})
    genreIDs!: Array<string>;

    @Field(() => [String], {nullable:true})
    studioIDs!: Array<string>;

    @Field(() => [String], {nullable:true})
    producerIDs!: Array<string>;

    @Field(() => [RelatedAnime], {nullable:true})
    related?: Array<RelatedAnime>;

    @Field(() => [Episode], {nullable:true})
    episodes?: Array<Episode>;

    @Field(() => [ExternalSite], {nullable:true})
    externalSites?: Array<ExternalSite>;

    @Field(() => [AnimeStudio], {nullable:true})
    studios?: Array<AnimeStudio>;

    @Field(() => [AnimeStudio], {nullable:true})
    producers?: Array<AnimeStudio>;

    @Field(() => [AnimeGenre], {nullable:true})
    genres?: Array<AnimeGenre>;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => AnimeCount, {nullable:false})
    _count?: AnimeCount;
}
