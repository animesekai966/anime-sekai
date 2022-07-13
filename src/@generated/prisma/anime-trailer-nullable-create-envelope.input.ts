import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTrailerCreateInput } from '../anime-trailer/anime-trailer-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeTrailerNullableCreateEnvelopeInput {

    @Field(() => AnimeTrailerCreateInput, {nullable:true})
    @Type(() => AnimeTrailerCreateInput)
    set?: AnimeTrailerCreateInput;
}
