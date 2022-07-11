import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeDescriptionCreateInput } from './anime-description-create.input';
import { Type } from 'class-transformer';
import { AnimeDescriptionUpdateInput } from './anime-description-update.input';

@InputType()
export class AnimeDescriptionUpdateEnvelopeInput {

    @Field(() => AnimeDescriptionCreateInput, {nullable:true})
    @Type(() => AnimeDescriptionCreateInput)
    set?: AnimeDescriptionCreateInput;

    @Field(() => AnimeDescriptionUpdateInput, {nullable:true})
    @Type(() => AnimeDescriptionUpdateInput)
    update?: AnimeDescriptionUpdateInput;
}
