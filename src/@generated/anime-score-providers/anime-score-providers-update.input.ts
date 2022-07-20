import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderUpdateEnvelopeInput } from '../anime-score-provider/anime-score-provider-update-envelope.input';

@InputType()
export class AnimeScoreProvidersUpdateInput {

    @Field(() => AnimeScoreProviderUpdateEnvelopeInput, {nullable:true})
    mal?: AnimeScoreProviderUpdateEnvelopeInput;

    @Field(() => AnimeScoreProviderUpdateEnvelopeInput, {nullable:true})
    anilist?: AnimeScoreProviderUpdateEnvelopeInput;
}
