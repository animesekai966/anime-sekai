import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Cover } from '../cover/cover.model';
import { Title } from '../title/title.model';
import { AnimeType } from '../prisma/anime-type.enum';
import { FuzzyDate } from '../fuzzy-date/fuzzy-date.model';
import { AgeRating } from '../prisma/age-rating.enum';
import { AnimeScore } from '../anime-score/anime-score.model';
import { AnimeSeason } from '../prisma/anime-season.enum';
import { AnimeBroadcast } from '../anime-broadcast/anime-broadcast.model';
import { AnimeDescription } from '../anime-description/anime-description.model';
import { RelatedAnime } from '../related-anime/related-anime.model';
import { Episode } from '../episode/episode.model';
import { ExternalSite } from '../external-site/external-site.model';
import { AnimeGenre } from '../anime-genre/anime-genre.model';
import { AnimeTheme } from '../anime-theme/anime-theme.model';
import { AnimeDemographic } from '../anime-demographic/anime-demographic.model';
import { AnimeStudio } from '../anime-studio/anime-studio.model';
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

    @Field(() => Cover, {nullable:false})
    cover?: Cover;

    @Field(() => [Cover], {nullable:true})
    altCovers?: Array<Cover>;

    @Field(() => Title, {nullable:false})
    title?: Title;

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
    themesIDs!: Array<string>;

    @Field(() => [String], {nullable:true})
    demographicIDs!: Array<string>;

    @Field(() => [String], {nullable:true})
    studioIDs!: Array<string>;

    @Field(() => [RelatedAnime], {nullable:true})
    related?: Array<RelatedAnime>;

    @Field(() => [RelatedAnime], {nullable:true})
    recommendations?: Array<RelatedAnime>;

    @Field(() => [Episode], {nullable:true})
    episodes?: Array<Episode>;

    @Field(() => [ExternalSite], {nullable:true})
    externalSites?: Array<ExternalSite>;

    @Field(() => [AnimeGenre], {nullable:true})
    genres?: Array<AnimeGenre>;

    @Field(() => [AnimeTheme], {nullable:true})
    themes?: Array<AnimeTheme>;

    @Field(() => [AnimeDemographic], {nullable:true})
    demographics?: Array<AnimeDemographic>;

    @Field(() => [AnimeStudio], {nullable:true})
    studios?: Array<AnimeStudio>;

    @Field(() => AnimeCount, {nullable:false})
    _count?: AnimeCount;
}
