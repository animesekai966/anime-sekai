import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProvidersCreateInput } from './anime-score-providers-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeScoreProvidersCreateEnvelopeInput {

    @Field(() => AnimeScoreProvidersCreateInput, {nullable:true})
    @Type(() => AnimeScoreProvidersCreateInput)
    set?: AnimeScoreProvidersCreateInput;
}
