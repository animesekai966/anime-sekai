import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreCreateInput } from './anime-score-create.input';
import { Type } from 'class-transformer';
import { AnimeScoreUpdateInput } from './anime-score-update.input';

@InputType()
export class AnimeScoreUpdateEnvelopeInput {

    @Field(() => AnimeScoreCreateInput, {nullable:true})
    @Type(() => AnimeScoreCreateInput)
    set?: AnimeScoreCreateInput;

    @Field(() => AnimeScoreUpdateInput, {nullable:true})
    @Type(() => AnimeScoreUpdateInput)
    update?: AnimeScoreUpdateInput;
}
