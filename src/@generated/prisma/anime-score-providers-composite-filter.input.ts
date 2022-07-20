import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProvidersObjectEqualityInput } from './anime-score-providers-object-equality.input';
import { AnimeScoreProvidersWhereInput } from '../anime-score-providers/anime-score-providers-where.input';

@InputType()
export class AnimeScoreProvidersCompositeFilter {

    @Field(() => AnimeScoreProvidersObjectEqualityInput, {nullable:true})
    equals?: AnimeScoreProvidersObjectEqualityInput;

    @Field(() => AnimeScoreProvidersWhereInput, {nullable:true})
    is?: AnimeScoreProvidersWhereInput;

    @Field(() => AnimeScoreProvidersWhereInput, {nullable:true})
    isNot?: AnimeScoreProvidersWhereInput;
}
