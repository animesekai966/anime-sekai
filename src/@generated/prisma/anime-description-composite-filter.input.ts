import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDescriptionObjectEqualityInput } from './anime-description-object-equality.input';
import { AnimeDescriptionWhereInput } from '../anime-description/anime-description-where.input';

@InputType()
export class AnimeDescriptionCompositeFilter {

    @Field(() => AnimeDescriptionObjectEqualityInput, {nullable:true})
    equals?: AnimeDescriptionObjectEqualityInput;

    @Field(() => AnimeDescriptionWhereInput, {nullable:true})
    is?: AnimeDescriptionWhereInput;

    @Field(() => AnimeDescriptionWhereInput, {nullable:true})
    isNot?: AnimeDescriptionWhereInput;
}
