import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTrailerCreateInput } from './anime-trailer-create.input';
import { Type } from 'class-transformer';
import { AnimeTrailerUpdateInput } from './anime-trailer-update.input';

@InputType()
export class AnimeTrailerUpdateEnvelopeInput {

    @Field(() => AnimeTrailerCreateInput, {nullable:true})
    @Type(() => AnimeTrailerCreateInput)
    set?: AnimeTrailerCreateInput;

    @Field(() => AnimeTrailerUpdateInput, {nullable:true})
    @Type(() => AnimeTrailerUpdateInput)
    update?: AnimeTrailerUpdateInput;
}
