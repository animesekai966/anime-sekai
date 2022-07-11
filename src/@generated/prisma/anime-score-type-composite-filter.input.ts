import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreTypeObjectEqualityInput } from './anime-score-type-object-equality.input';
import { AnimeScoreTypeWhereInput } from '../anime-score-type/anime-score-type-where.input';

@InputType()
export class AnimeScoreTypeCompositeFilter {

    @Field(() => AnimeScoreTypeObjectEqualityInput, {nullable:true})
    equals?: AnimeScoreTypeObjectEqualityInput;

    @Field(() => AnimeScoreTypeWhereInput, {nullable:true})
    is?: AnimeScoreTypeWhereInput;

    @Field(() => AnimeScoreTypeWhereInput, {nullable:true})
    isNot?: AnimeScoreTypeWhereInput;
}
