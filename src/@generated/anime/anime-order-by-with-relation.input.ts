import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AnimeCoverImageOrderByInput } from '../anime-cover-image/anime-cover-image-order-by.input';
import { AnimeCoverImageOrderByCompositeAggregateInput } from '../anime-cover-image/anime-cover-image-order-by-composite-aggregate.input';
import { AnimeTitleOrderByInput } from '../anime-title/anime-title-order-by.input';
import { AnimeDescriptionOrderByInput } from '../anime-description/anime-description-order-by.input';
import { FuzzyDateOrderByInput } from '../fuzzy-date/fuzzy-date-order-by.input';
import { AnimeTrailerOrderByInput } from '../anime-trailer/anime-trailer-order-by.input';
import { AnimeScoreProvidersOrderByInput } from '../anime-score-providers/anime-score-providers-order-by.input';
import { GenreOrderByRelationAggregateInput } from '../genre/genre-order-by-relation-aggregate.input';
import { StudioOrderByRelationAggregateInput } from '../studio/studio-order-by-relation-aggregate.input';
import { CharactersOnAnimesOrderByRelationAggregateInput } from '../characters-on-animes/characters-on-animes-order-by-relation-aggregate.input';
import { AnimeRelationTypeOrderByInput } from '../anime-relation-type/anime-relation-type-order-by.input';
import { EpisodeOrderByRelationAggregateInput } from '../episode/episode-order-by-relation-aggregate.input';
import { AnimeBroadcastOrderByInput } from '../anime-broadcast/anime-broadcast-order-by.input';

@InputType()
export class AnimeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    slug?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    malId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    anilistId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeSlayerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    xsAnimeId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeXId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeBlkomId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    banner?: keyof typeof SortOrder;

    @Field(() => AnimeCoverImageOrderByInput, {nullable:true})
    cover?: AnimeCoverImageOrderByInput;

    @Field(() => AnimeCoverImageOrderByCompositeAggregateInput, {nullable:true})
    altCovers?: AnimeCoverImageOrderByCompositeAggregateInput;

    @Field(() => AnimeTitleOrderByInput, {nullable:true})
    title?: AnimeTitleOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => AnimeDescriptionOrderByInput, {nullable:true})
    description?: AnimeDescriptionOrderByInput;

    @Field(() => FuzzyDateOrderByInput, {nullable:true})
    startDate?: FuzzyDateOrderByInput;

    @Field(() => FuzzyDateOrderByInput, {nullable:true})
    endDate?: FuzzyDateOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    season?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    episodesCount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    countryOfOrigin?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isLicensed?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    isAdult?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => AnimeTrailerOrderByInput, {nullable:true})
    trailer?: AnimeTrailerOrderByInput;

    @Field(() => AnimeScoreProvidersOrderByInput, {nullable:true})
    score?: AnimeScoreProvidersOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    openings?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    endings?: keyof typeof SortOrder;

    @Field(() => GenreOrderByRelationAggregateInput, {nullable:true})
    genres?: GenreOrderByRelationAggregateInput;

    @Field(() => StudioOrderByRelationAggregateInput, {nullable:true})
    producers?: StudioOrderByRelationAggregateInput;

    @Field(() => StudioOrderByRelationAggregateInput, {nullable:true})
    studios?: StudioOrderByRelationAggregateInput;

    @Field(() => CharactersOnAnimesOrderByRelationAggregateInput, {nullable:true})
    characters?: CharactersOnAnimesOrderByRelationAggregateInput;

    @Field(() => AnimeRelationTypeOrderByInput, {nullable:true})
    related?: AnimeRelationTypeOrderByInput;

    @Field(() => EpisodeOrderByRelationAggregateInput, {nullable:true})
    episodes?: EpisodeOrderByRelationAggregateInput;

    @Field(() => AnimeBroadcastOrderByInput, {nullable:true})
    broadcast?: AnimeBroadcastOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    producerIDs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    studioIDs?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    genreIDs?: keyof typeof SortOrder;
}
