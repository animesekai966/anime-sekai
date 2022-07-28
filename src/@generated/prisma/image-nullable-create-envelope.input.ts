import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateInput } from '../image/image-create.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageNullableCreateEnvelopeInput {

    @Field(() => ImageCreateInput, {nullable:true})
    @Type(() => ImageCreateInput)
    set?: ImageCreateInput;
}
