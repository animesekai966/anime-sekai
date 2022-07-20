import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverImageCreateInput } from '../anime-cover-image/anime-cover-image-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeCoverImageListCreateEnvelopeInput {

    @Field(() => [AnimeCoverImageCreateInput], {nullable:true})
    @Type(() => AnimeCoverImageCreateInput)
    set?: Array<AnimeCoverImageCreateInput>;
}
