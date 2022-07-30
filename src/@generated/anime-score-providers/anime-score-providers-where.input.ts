import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderNullableCompositeFilter } from '../prisma/anime-score-provider-nullable-composite-filter.input';

@InputType()
export class AnimeScoreProvidersWhereInput {

    @Field(() => [AnimeScoreProvidersWhereInput], {nullable:true})
    AND?: Array<AnimeScoreProvidersWhereInput>;

    @Field(() => [AnimeScoreProvidersWhereInput], {nullable:true})
    OR?: Array<AnimeScoreProvidersWhereInput>;

    @Field(() => [AnimeScoreProvidersWhereInput], {nullable:true})
    NOT?: Array<AnimeScoreProvidersWhereInput>;

    @Field(() => AnimeScoreProviderNullableCompositeFilter, {nullable:true})
    mal?: AnimeScoreProviderNullableCompositeFilter;

    @Field(() => AnimeScoreProviderNullableCompositeFilter, {nullable:true})
    anilist?: AnimeScoreProviderNullableCompositeFilter;
}
