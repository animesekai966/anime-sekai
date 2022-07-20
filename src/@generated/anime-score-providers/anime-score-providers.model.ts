import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AnimeScoreProvider } from '../anime-score-provider/anime-score-provider.model';

@ObjectType()
export class AnimeScoreProviders {

    @Field(() => AnimeScoreProvider, {nullable:false})
    mal?: AnimeScoreProvider;

    @Field(() => AnimeScoreProvider, {nullable:false})
    anilist?: AnimeScoreProvider;
}
