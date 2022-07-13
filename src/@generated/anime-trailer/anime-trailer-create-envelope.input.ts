import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTrailerCreateInput } from './anime-trailer-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeTrailerCreateEnvelopeInput {

    @Field(() => AnimeTrailerCreateInput, {nullable:true})
    @Type(() => AnimeTrailerCreateInput)
    set?: AnimeTrailerCreateInput;
}
