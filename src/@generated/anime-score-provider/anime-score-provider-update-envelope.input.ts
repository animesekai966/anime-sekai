import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderCreateInput } from './anime-score-provider-create.input';
import { Type } from 'class-transformer';
import { AnimeScoreProviderUpdateInput } from './anime-score-provider-update.input';

@InputType()
export class AnimeScoreProviderUpdateEnvelopeInput {

    @Field(() => AnimeScoreProviderCreateInput, {nullable:true})
    @Type(() => AnimeScoreProviderCreateInput)
    set?: AnimeScoreProviderCreateInput;

    @Field(() => AnimeScoreProviderUpdateInput, {nullable:true})
    @Type(() => AnimeScoreProviderUpdateInput)
    update?: AnimeScoreProviderUpdateInput;
}
