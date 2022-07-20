import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderObjectEqualityInput } from './anime-score-provider-object-equality.input';
import { AnimeScoreProviderWhereInput } from '../anime-score-provider/anime-score-provider-where.input';

@InputType()
export class AnimeScoreProviderCompositeFilter {

    @Field(() => AnimeScoreProviderObjectEqualityInput, {nullable:true})
    equals?: AnimeScoreProviderObjectEqualityInput;

    @Field(() => AnimeScoreProviderWhereInput, {nullable:true})
    is?: AnimeScoreProviderWhereInput;

    @Field(() => AnimeScoreProviderWhereInput, {nullable:true})
    isNot?: AnimeScoreProviderWhereInput;
}
