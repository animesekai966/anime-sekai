import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProviderCreateInput } from './anime-score-provider-create.input';
import { Type } from 'class-transformer';
import { AnimeScoreProviderUpdateInput } from './anime-score-provider-update.input';

@InputType()
export class AnimeScoreProviderUpsertInput {

    @Field(() => AnimeScoreProviderCreateInput, {nullable:false})
    @Type(() => AnimeScoreProviderCreateInput)
    set!: AnimeScoreProviderCreateInput;

    @Field(() => AnimeScoreProviderUpdateInput, {nullable:false})
    @Type(() => AnimeScoreProviderUpdateInput)
    update!: AnimeScoreProviderUpdateInput;
}
