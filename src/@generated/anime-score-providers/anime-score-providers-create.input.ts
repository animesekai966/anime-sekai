import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderCreateInput } from '../anime-score-provider/anime-score-provider-create.input';

@InputType()
export class AnimeScoreProvidersCreateInput {

    @Field(() => AnimeScoreProviderCreateInput, {nullable:true})
    mal?: AnimeScoreProviderCreateInput;

    @Field(() => AnimeScoreProviderCreateInput, {nullable:true})
    anilist?: AnimeScoreProviderCreateInput;
}
