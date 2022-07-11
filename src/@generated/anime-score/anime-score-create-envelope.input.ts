import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreCreateInput } from './anime-score-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeScoreCreateEnvelopeInput {

    @Field(() => AnimeScoreCreateInput, {nullable:true})
    @Type(() => AnimeScoreCreateInput)
    set?: AnimeScoreCreateInput;
}
