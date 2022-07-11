import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreObjectEqualityInput } from './anime-score-object-equality.input';
import { AnimeScoreWhereInput } from '../anime-score/anime-score-where.input';

@InputType()
export class AnimeScoreCompositeFilter {

    @Field(() => AnimeScoreObjectEqualityInput, {nullable:true})
    equals?: AnimeScoreObjectEqualityInput;

    @Field(() => AnimeScoreWhereInput, {nullable:true})
    is?: AnimeScoreWhereInput;

    @Field(() => AnimeScoreWhereInput, {nullable:true})
    isNot?: AnimeScoreWhereInput;
}
