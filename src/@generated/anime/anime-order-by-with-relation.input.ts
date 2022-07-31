import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { ImageOrderByInput } from '../image/image-order-by.input';
import { ImageOrderByCompositeAggregateInput } from '../image/image-order-by-composite-aggregate.input';
import { AnimeTitleOrderByInput } from '../anime-title/anime-title-order-by.input';
import { DescriptionOrderByInput } from '../description/description-order-by.input';
import { FuzzyDateOrderByInput } from '../fuzzy-date/fuzzy-date-order-by.input';
import { AnimeTrailerOrderByInput } from '../anime-trailer/anime-trailer-order-by.input';
import { AnimeScoreProvidersOrderByInput } from '../anime-score-providers/anime-score-providers-order-by.input';
import { AnimeBroadcastOrderByInput } from '../anime-broadcast/anime-broadcast-order-by.input';
import { GenreOrderByRelationAggregateInput } from '../genre/genre-order-by-relation-aggregate.input';
import { EpisodeOrderByRelationAggregateInput } from '../episode/episode-order-by-relation-aggregate.input';
import { StudioOrderByRelationAggregateInput } from '../studio/studio-order-by-relation-aggregate.input';
import { CharacterOnAnimeOrderByRelationAggregateInput } from '../character-on-anime/character-on-anime-order-by-relation-aggregate.input';
import { StaffOnAnimeOrderByRelationAggregateInput } from '../staff-on-anime/staff-on-anime-order-by-relation-aggregate.input';
import { AnimeRelationTypeOrderByCompositeAggregateInput } from '../anime-relation-type/anime-relation-type-order-by-composite-aggregate.input';
import { ExternalLinkOrderByCompositeAggregateInput } from '../external-link/external-link-order-by-composite-aggregate.input';
import { HideField } from '@nestjs/graphql';

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
    animeXId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    animeBlkomId?: keyof typeof SortOrder;

    @Field(() => ImageOrderByInput, {nullable:true})
    banner?: ImageOrderByInput;

    @Field(() => ImageOrderByInput, {nullable:true})
    cover?: ImageOrderByInput;

    @Field(() => ImageOrderByCompositeAggregateInput, {nullable:true})
    altCovers?: ImageOrderByCompositeAggregateInput;

    @Field(() => AnimeTitleOrderByInput, {nullable:true})
    title?: AnimeTitleOrderByInput;

    @Field(() => SortOrder, {nullable:true})
    format?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => DescriptionOrderByInput, {nullable:true})
    description?: DescriptionOrderByInput;

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
    rating?: keyof typeof SortOrder;

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

    @Field(() => AnimeBroadcastOrderByInput, {nullable:true})
    broadcast?: AnimeBroadcastOrderByInput;

    @Field(() => GenreOrderByRelationAggregateInput, {nullable:true})
    genres?: GenreOrderByRelationAggregateInput;

    @Field(() => EpisodeOrderByRelationAggregateInput, {nullable:true})
    episodes?: EpisodeOrderByRelationAggregateInput;

    @Field(() => StudioOrderByRelationAggregateInput, {nullable:true})
    producers?: StudioOrderByRelationAggregateInput;

    @Field(() => StudioOrderByRelationAggregateInput, {nullable:true})
    studios?: StudioOrderByRelationAggregateInput;

    @Field(() => CharacterOnAnimeOrderByRelationAggregateInput, {nullable:true})
    characters?: CharacterOnAnimeOrderByRelationAggregateInput;

    @Field(() => StaffOnAnimeOrderByRelationAggregateInput, {nullable:true})
    staff?: StaffOnAnimeOrderByRelationAggregateInput;

    @Field(() => AnimeRelationTypeOrderByCompositeAggregateInput, {nullable:true})
    related?: AnimeRelationTypeOrderByCompositeAggregateInput;

    @Field(() => ExternalLinkOrderByCompositeAggregateInput, {nullable:true})
    externalLinks?: ExternalLinkOrderByCompositeAggregateInput;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @HideField()
    producerIDs?: keyof typeof SortOrder;

    @HideField()
    studioIDs?: keyof typeof SortOrder;

    @HideField()
    genreIDs?: keyof typeof SortOrder;
}
