import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Image } from '../image/image.model';
import { AnimeTitle } from '../anime-title/anime-title.model';
import { AnimeFormat } from '../prisma/anime-format.enum';
import { AnimeStatus } from '../prisma/anime-status.enum';
import { Description } from '../description/description.model';
import { FuzzyDate } from '../fuzzy-date/fuzzy-date.model';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { Float } from '@nestjs/graphql';
import { AgeRating } from '../prisma/age-rating.enum';
import { AnimeSource } from '../prisma/anime-source.enum';
import { AnimeTrailer } from '../anime-trailer/anime-trailer.model';
import { AnimeScoreProviders } from '../anime-score-providers/anime-score-providers.model';
import { AnimeBroadcast } from '../anime-broadcast/anime-broadcast.model';
import { Genre } from '../genre/genre.model';
import { Episode } from '../episode/episode.model';
import { Studio } from '../studio/studio.model';
import { CharacterOnAnime } from '../character-on-anime/character-on-anime.model';
import { StaffOnAnime } from '../staff-on-anime/staff-on-anime.model';
import { AnimeRelationType } from '../anime-relation-type/anime-relation-type.model';
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

    @Field(() => String, {nullable:true})
    animeXId!: string | null;

    @Field(() => String, {nullable:true})
    animeBlkomId!: string | null;

    @Field(() => Image, {nullable:true})
    banner?: Image | null;

    @Field(() => Image, {nullable:false})
    cover?: Image;

    @Field(() => [Image], {nullable:true})
    altCovers?: Array<Image>;

    @Field(() => AnimeTitle, {nullable:false})
    title?: AnimeTitle;

    @Field(() => AnimeFormat, {nullable:false,defaultValue:'TV'})
    format!: keyof typeof AnimeFormat;

    @Field(() => AnimeStatus, {nullable:false,defaultValue:'RELEASING'})
    status!: keyof typeof AnimeStatus;

    @Field(() => Description, {nullable:false})
    description?: Description;

    @Field(() => FuzzyDate, {nullable:false})
    startDate?: FuzzyDate;

    @Field(() => FuzzyDate, {nullable:false})
    endDate?: FuzzyDate;

    @Field(() => AnimeSeason, {nullable:false})
    season!: keyof typeof AnimeSeason;

    @Field(() => Int, {nullable:true,defaultValue:12})
    episodesCount!: number | null;

    @Field(() => Float, {nullable:true,defaultValue:1440000})
    duration!: number | null;

    @Field(() => String, {nullable:true,defaultValue:'ja'})
    countryOfOrigin!: string | null;

    @Field(() => Boolean, {nullable:false})
    isLicensed!: boolean;

    @Field(() => Boolean, {nullable:false})
    isAdult!: boolean;

    @Field(() => AgeRating, {nullable:false})
    rating!: keyof typeof AgeRating;

    @Field(() => AnimeSource, {nullable:false})
    source!: keyof typeof AnimeSource;

    @Field(() => AnimeTrailer, {nullable:false})
    trailer?: AnimeTrailer;

    @Field(() => AnimeScoreProviders, {nullable:true})
    score?: AnimeScoreProviders | null;

    @Field(() => [String], {nullable:true})
    openings!: Array<string>;

    @Field(() => [String], {nullable:true})
    endings!: Array<string>;

    @Field(() => AnimeBroadcast, {nullable:true})
    broadcast?: AnimeBroadcast | null;

    @Field(() => [Genre], {nullable:true})
    genres?: Array<Genre>;

    @Field(() => [Episode], {nullable:true})
    episodes?: Array<Episode>;

    @Field(() => [Studio], {nullable:true})
    producers?: Array<Studio>;

    @Field(() => [Studio], {nullable:true})
    studios?: Array<Studio>;

    @Field(() => [CharacterOnAnime], {nullable:true})
    characters?: Array<CharacterOnAnime>;

    @Field(() => [StaffOnAnime], {nullable:true})
    staff?: Array<StaffOnAnime>;

    @Field(() => [AnimeRelationType], {nullable:true})
    related?: Array<AnimeRelationType>;

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
