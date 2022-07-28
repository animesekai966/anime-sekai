import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateInput } from '../image/image-create.input';
import { Type } from 'class-transformer';
import { ImageUpdateManyInput } from '../image/image-update-many.input';
import { ImageDeleteManyInput } from './image-delete-many.input';

@InputType()
export class ImageListUpdateEnvelopeInput {

    @Field(() => [ImageCreateInput], {nullable:true})
    @Type(() => ImageCreateInput)
    set?: Array<ImageCreateInput>;

    @Field(() => [ImageCreateInput], {nullable:true})
    push?: Array<ImageCreateInput>;

    @Field(() => ImageUpdateManyInput, {nullable:true})
    @Type(() => ImageUpdateManyInput)
    updateMany?: ImageUpdateManyInput;

    @Field(() => ImageDeleteManyInput, {nullable:true})
    @Type(() => ImageDeleteManyInput)
    deleteMany?: ImageDeleteManyInput;
}
