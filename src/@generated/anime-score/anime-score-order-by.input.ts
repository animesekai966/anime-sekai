import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreTypeOrderByInput } from '../anime-score-type/anime-score-type-order-by.input';

@InputType()
export class AnimeScoreOrderByInput {

    @Field(() => AnimeScoreTypeOrderByInput, {nullable:true})
    mal?: AnimeScoreTypeOrderByInput;

    @Field(() => AnimeScoreTypeOrderByInput, {nullable:true})
    anilist?: AnimeScoreTypeOrderByInput;
}
