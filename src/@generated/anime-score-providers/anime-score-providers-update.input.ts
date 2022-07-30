import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderNullableUpdateEnvelopeInput } from '../prisma/anime-score-provider-nullable-update-envelope.input';

@InputType()
export class AnimeScoreProvidersUpdateInput {

    @Field(() => AnimeScoreProviderNullableUpdateEnvelopeInput, {nullable:true})
    mal?: AnimeScoreProviderNullableUpdateEnvelopeInput;

    @Field(() => AnimeScoreProviderNullableUpdateEnvelopeInput, {nullable:true})
    anilist?: AnimeScoreProviderNullableUpdateEnvelopeInput;
}
