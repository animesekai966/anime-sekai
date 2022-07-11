import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeScoreTypeObjectEqualityInput } from './anime-score-type-object-equality.input';

@InputType()
export class AnimeScoreObjectEqualityInput {

    @Field(() => AnimeScoreTypeObjectEqualityInput, {nullable:false})
    mal!: AnimeScoreTypeObjectEqualityInput;

    @Field(() => AnimeScoreTypeObjectEqualityInput, {nullable:false})
    anilist!: AnimeScoreTypeObjectEqualityInput;
}
