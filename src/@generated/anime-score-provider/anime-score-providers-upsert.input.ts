import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreProvidersCreateInput } from '../anime-score-providers/anime-score-providers-create.input';
import { Type } from 'class-transformer';
import { AnimeScoreProvidersUpdateInput } from '../anime-score-providers/anime-score-providers-update.input';

@InputType()
export class AnimeScoreProvidersUpsertInput {

    @Field(() => AnimeScoreProvidersCreateInput, {nullable:false})
    @Type(() => AnimeScoreProvidersCreateInput)
    set!: AnimeScoreProvidersCreateInput;

    @Field(() => AnimeScoreProvidersUpdateInput, {nullable:false})
    @Type(() => AnimeScoreProvidersUpdateInput)
    update!: AnimeScoreProvidersUpdateInput;
}
