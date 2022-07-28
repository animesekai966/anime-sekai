import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateInput } from '../image/image-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageListCreateEnvelopeInput {

    @Field(() => [ImageCreateInput], {nullable:true})
    @Type(() => ImageCreateInput)
    set?: Array<ImageCreateInput>;
}
