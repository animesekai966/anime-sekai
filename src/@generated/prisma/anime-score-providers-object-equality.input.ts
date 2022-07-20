import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderObjectEqualityInput } from './anime-score-provider-object-equality.input';

@InputType()
export class AnimeScoreProvidersObjectEqualityInput {

    @Field(() => AnimeScoreProviderObjectEqualityInput, {nullable:false})
    mal!: AnimeScoreProviderObjectEqualityInput;

    @Field(() => AnimeScoreProviderObjectEqualityInput, {nullable:false})
    anilist!: AnimeScoreProviderObjectEqualityInput;
}
