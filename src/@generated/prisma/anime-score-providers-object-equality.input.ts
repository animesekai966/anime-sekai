import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderObjectEqualityInput } from './anime-score-provider-object-equality.input';

@InputType()
export class AnimeScoreProvidersObjectEqualityInput {

    @Field(() => AnimeScoreProviderObjectEqualityInput, {nullable:true})
    mal?: AnimeScoreProviderObjectEqualityInput;

    @Field(() => AnimeScoreProviderObjectEqualityInput, {nullable:true})
    anilist?: AnimeScoreProviderObjectEqualityInput;
}
