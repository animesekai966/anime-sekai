import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreTypeCreateInput } from '../anime-score-type/anime-score-type-create.input';

@InputType()
export class AnimeScoreCreateInput {

    @Field(() => AnimeScoreTypeCreateInput, {nullable:false})
    mal!: AnimeScoreTypeCreateInput;

    @Field(() => AnimeScoreTypeCreateInput, {nullable:false})
    anilist!: AnimeScoreTypeCreateInput;
}
