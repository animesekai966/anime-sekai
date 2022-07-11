import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreTypeUpdateEnvelopeInput } from '../anime-score-type/anime-score-type-update-envelope.input';

@InputType()
export class AnimeScoreUpdateInput {

    @Field(() => AnimeScoreTypeUpdateEnvelopeInput, {nullable:true})
    mal?: AnimeScoreTypeUpdateEnvelopeInput;

    @Field(() => AnimeScoreTypeUpdateEnvelopeInput, {nullable:true})
    anilist?: AnimeScoreTypeUpdateEnvelopeInput;
}
