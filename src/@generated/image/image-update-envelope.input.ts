import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateInput } from './image-create.input';
import { Type } from 'class-transformer';
import { ImageUpdateInput } from './image-update.input';

@InputType()
export class ImageUpdateEnvelopeInput {

    @Field(() => ImageCreateInput, {nullable:true})
    @Type(() => ImageCreateInput)
    set?: ImageCreateInput;

    @Field(() => ImageUpdateInput, {nullable:true})
    @Type(() => ImageUpdateInput)
    update?: ImageUpdateInput;
}
