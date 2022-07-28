import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageCreateInput } from './image-create.input';
import { Type } from 'class-transformer';
import { ImageUpdateInput } from './image-update.input';

@InputType()
export class ImageUpsertInput {

    @Field(() => ImageCreateInput, {nullable:false})
    @Type(() => ImageCreateInput)
    set!: ImageCreateInput;

    @Field(() => ImageUpdateInput, {nullable:false})
    @Type(() => ImageUpdateInput)
    update!: ImageUpdateInput;
}
