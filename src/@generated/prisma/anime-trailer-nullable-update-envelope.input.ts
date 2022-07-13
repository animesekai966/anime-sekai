import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTrailerCreateInput } from '../anime-trailer/anime-trailer-create.input';
import { Type } from 'class-transformer';
import { AnimeTrailerUpsertInput } from '../anime-trailer/anime-trailer-upsert.input';

@InputType()
export class AnimeTrailerNullableUpdateEnvelopeInput {

    @Field(() => AnimeTrailerCreateInput, {nullable:true})
    @Type(() => AnimeTrailerCreateInput)
    set?: AnimeTrailerCreateInput;

    @Field(() => AnimeTrailerUpsertInput, {nullable:true})
    @Type(() => AnimeTrailerUpsertInput)
    upsert?: AnimeTrailerUpsertInput;

    @Field(() => Boolean, {nullable:true})
    unset?: boolean;
}
