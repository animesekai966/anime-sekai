import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProvidersCreateInput } from './anime-score-providers-create.input';
import { Type } from 'class-transformer';
import { AnimeScoreProvidersUpdateInput } from './anime-score-providers-update.input';

@InputType()
export class AnimeScoreProvidersUpdateEnvelopeInput {

    @Field(() => AnimeScoreProvidersCreateInput, {nullable:true})
    @Type(() => AnimeScoreProvidersCreateInput)
    set?: AnimeScoreProvidersCreateInput;

    @Field(() => AnimeScoreProvidersUpdateInput, {nullable:true})
    @Type(() => AnimeScoreProvidersUpdateInput)
    update?: AnimeScoreProvidersUpdateInput;
}
