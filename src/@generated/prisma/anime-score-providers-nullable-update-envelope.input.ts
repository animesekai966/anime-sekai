import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProvidersCreateInput } from '../anime-score-providers/anime-score-providers-create.input';
import { Type } from 'class-transformer';
import { AnimeScoreProvidersUpsertInput } from '../anime-score-provider/anime-score-providers-upsert.input';

@InputType()
export class AnimeScoreProvidersNullableUpdateEnvelopeInput {

    @Field(() => AnimeScoreProvidersCreateInput, {nullable:true})
    @Type(() => AnimeScoreProvidersCreateInput)
    set?: AnimeScoreProvidersCreateInput;

    @Field(() => AnimeScoreProvidersUpsertInput, {nullable:true})
    @Type(() => AnimeScoreProvidersUpsertInput)
    upsert?: AnimeScoreProvidersUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
