import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProvidersCreateInput } from '../anime-score-providers/anime-score-providers-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeScoreProvidersNullableCreateEnvelopeInput {

    @Field(() => AnimeScoreProvidersCreateInput, {nullable:true})
    @Type(() => AnimeScoreProvidersCreateInput)
    set?: AnimeScoreProvidersCreateInput;
}
