import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverCreateInput } from './anime-cover-create.input';
import { Type } from 'class-transformer';
import { AnimeCoverUpdateInput } from './anime-cover-update.input';

@InputType()
export class AnimeCoverUpdateEnvelopeInput {

    @Field(() => AnimeCoverCreateInput, {nullable:true})
    @Type(() => AnimeCoverCreateInput)
    set?: AnimeCoverCreateInput;

    @Field(() => AnimeCoverUpdateInput, {nullable:true})
    @Type(() => AnimeCoverUpdateInput)
    update?: AnimeCoverUpdateInput;
}
