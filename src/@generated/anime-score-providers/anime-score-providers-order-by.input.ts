import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderOrderByInput } from '../anime-score-provider/anime-score-provider-order-by.input';

@InputType()
export class AnimeScoreProvidersOrderByInput {

    @Field(() => AnimeScoreProviderOrderByInput, {nullable:true})
    mal?: AnimeScoreProviderOrderByInput;

    @Field(() => AnimeScoreProviderOrderByInput, {nullable:true})
    anilist?: AnimeScoreProviderOrderByInput;
}
