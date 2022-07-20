import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverImageCreateInput } from './anime-cover-image-create.input';
import { Type } from 'class-transformer';
import { AnimeCoverImageUpdateInput } from './anime-cover-image-update.input';

@InputType()
export class AnimeCoverImageUpdateEnvelopeInput {

    @Field(() => AnimeCoverImageCreateInput, {nullable:true})
    @Type(() => AnimeCoverImageCreateInput)
    set?: AnimeCoverImageCreateInput;

    @Field(() => AnimeCoverImageUpdateInput, {nullable:true})
    @Type(() => AnimeCoverImageUpdateInput)
    update?: AnimeCoverImageUpdateInput;
}
