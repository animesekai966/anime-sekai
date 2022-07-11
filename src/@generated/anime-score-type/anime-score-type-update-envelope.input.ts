import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreTypeCreateInput } from './anime-score-type-create.input';
import { Type } from 'class-transformer';
import { AnimeScoreTypeUpdateInput } from './anime-score-type-update.input';

@InputType()
export class AnimeScoreTypeUpdateEnvelopeInput {

    @Field(() => AnimeScoreTypeCreateInput, {nullable:true})
    @Type(() => AnimeScoreTypeCreateInput)
    set?: AnimeScoreTypeCreateInput;

    @Field(() => AnimeScoreTypeUpdateInput, {nullable:true})
    @Type(() => AnimeScoreTypeUpdateInput)
    update?: AnimeScoreTypeUpdateInput;
}
