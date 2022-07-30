import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderCreateInput } from '../anime-score-provider/anime-score-provider-create.input';
import { Type } from 'class-transformer';
import { AnimeScoreProviderUpsertInput } from '../anime-score-provider/anime-score-provider-upsert.input';

@InputType()
export class AnimeScoreProviderNullableUpdateEnvelopeInput {

    @Field(() => AnimeScoreProviderCreateInput, {nullable:true})
    @Type(() => AnimeScoreProviderCreateInput)
    set?: AnimeScoreProviderCreateInput;

    @Field(() => AnimeScoreProviderUpsertInput, {nullable:true})
    @Type(() => AnimeScoreProviderUpsertInput)
    upsert?: AnimeScoreProviderUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
