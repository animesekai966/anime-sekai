import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTrailerObjectEqualityInput } from './anime-trailer-object-equality.input';
import { AnimeTrailerWhereInput } from '../anime-trailer/anime-trailer-where.input';

@InputType()
export class AnimeTrailerCompositeFilter {

    @Field(() => AnimeTrailerObjectEqualityInput, {nullable:true})
    equals?: AnimeTrailerObjectEqualityInput;

    @Field(() => AnimeTrailerWhereInput, {nullable:true})
    is?: AnimeTrailerWhereInput;

    @Field(() => AnimeTrailerWhereInput, {nullable:true})
    isNot?: AnimeTrailerWhereInput;
}
