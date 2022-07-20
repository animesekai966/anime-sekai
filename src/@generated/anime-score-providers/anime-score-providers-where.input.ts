import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderCompositeFilter } from '../prisma/anime-score-provider-composite-filter.input';

@InputType()
export class AnimeScoreProvidersWhereInput {

    @Field(() => [AnimeScoreProvidersWhereInput], {nullable:true})
    AND?: Array<AnimeScoreProvidersWhereInput>;

    @Field(() => [AnimeScoreProvidersWhereInput], {nullable:true})
    OR?: Array<AnimeScoreProvidersWhereInput>;

    @Field(() => [AnimeScoreProvidersWhereInput], {nullable:true})
    NOT?: Array<AnimeScoreProvidersWhereInput>;

    @Field(() => AnimeScoreProviderCompositeFilter, {nullable:true})
    mal?: AnimeScoreProviderCompositeFilter;

    @Field(() => AnimeScoreProviderCompositeFilter, {nullable:true})
    anilist?: AnimeScoreProviderCompositeFilter;
}
