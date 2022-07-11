import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDescriptionCreateInput } from './anime-description-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeDescriptionCreateEnvelopeInput {

    @Field(() => AnimeDescriptionCreateInput, {nullable:true})
    @Type(() => AnimeDescriptionCreateInput)
    set?: AnimeDescriptionCreateInput;
}
