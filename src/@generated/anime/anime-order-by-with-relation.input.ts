import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CoverOrderByInput } from '../cover/cover-order-by.input';
import { CoverOrderByCompositeAggregateInput } from '../cover/cover-order-by-composite-aggregate.input';
import { TitleOrderByInput } from '../title/title-order-by.input';
import { FuzzyDateOrderByInput } from '../fuzzy-date/fuzzy-date-order-by.input';
import { AnimeScoreOrderByInput } from '../anime-score/anime-score-order-by.input';
import { AnimeBroadcastOrderByInput } from '../anime-broadcast/anime-broadcast-order-by.input';
import { AnimeDescriptionOrderByInput } from '../anime-description/anime-description-order-by.input';
import { RelatedAnimeOrderByCompositeAggregateInput } from '../related-anime/related-anime-order-by-composite-aggregate.input';
import { EpisodeOrderByCompositeAggregateInput } from '../episode/episode-order-by-composite-aggregate.input';
import { ExternalSiteOrderByCompositeAggregateInput } from '../external-site/external-site-order-by-composite-aggregate.input';
import { AnimeGenreOrderByRelationAggregateInput } from '../anime-genre/anime-genre-order-by-relation-aggregate.input';
import { AnimeThemeOrderByRelationAggregateInput } from '../anime-theme/anime-theme-order-by-relation-aggregate.input';
import { AnimeDemographicOrderByRelationAggregateInput } from '../anime-demographic/anime-demographic-order-by-relation-aggregate.input';
import { AnimeStudioOrderByRelationAggregateInput } from '../anime-studio/anime-studio-order-by-relation-aggregate.input';

@InputType()
export class AnimeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    anilistId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeXId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banner?: keyof typeof SortOrder;

    @Field(() => CoverOrderByInput, {nullable:true})
    cover?: CoverOrderByInput;

    @Field(() => CoverOrderByCompositeAggregateInput, {nullable:true})
    altCovers?: CoverOrderByCompositeAggregateInput;

    @Field(() => TitleOrderByInput, {nullable:true})
    title?: TitleOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => FuzzyDateOrderByInput, {nullable:true})
    startDate?: FuzzyDateOrderByInput;

    @Field(() => FuzzyDateOrderByInput, {nullable:true})
    endDate?: FuzzyDateOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ageRating?: keyof typeof SortOrder;

    @Field(() => AnimeScoreOrderByInput, {nullable:true})
    score?: AnimeScoreOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    season?: keyof typeof SortOrder;

    @Field(() => AnimeBroadcastOrderByInput, {nullable:true})
    broadcast?: AnimeBroadcastOrderByInput;

    @Field(() => AnimeDescriptionOrderByInput, {nullable:true})
    description?: AnimeDescriptionOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    openings?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endings?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genreIDs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    themesIDs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    demographicIDs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    studioIDs?: keyof typeof SortOrder;

    @Field(() => RelatedAnimeOrderByCompositeAggregateInput, {nullable:true})
    related?: RelatedAnimeOrderByCompositeAggregateInput;

    @Field(() => RelatedAnimeOrderByCompositeAggregateInput, {nullable:true})
    recommendations?: RelatedAnimeOrderByCompositeAggregateInput;

    @Field(() => EpisodeOrderByCompositeAggregateInput, {nullable:true})
    episodes?: EpisodeOrderByCompositeAggregateInput;

    @Field(() => ExternalSiteOrderByCompositeAggregateInput, {nullable:true})
    externalSites?: ExternalSiteOrderByCompositeAggregateInput;

    @Field(() => AnimeGenreOrderByRelationAggregateInput, {nullable:true})
    genres?: AnimeGenreOrderByRelationAggregateInput;

    @Field(() => AnimeThemeOrderByRelationAggregateInput, {nullable:true})
    themes?: AnimeThemeOrderByRelationAggregateInput;

    @Field(() => AnimeDemographicOrderByRelationAggregateInput, {nullable:true})
    demographics?: AnimeDemographicOrderByRelationAggregateInput;

    @Field(() => AnimeStudioOrderByRelationAggregateInput, {nullable:true})
    studios?: AnimeStudioOrderByRelationAggregateInput;
}
