import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereInput } from './image-where.input';
import { Type } from 'class-transformer';
import { ImageUpdateInput } from './image-update.input';

@InputType()
export class ImageUpdateManyInput {

    @Field(() => ImageWhereInput, {nullable:false})
    @Type(() => ImageWhereInput)
    where!: ImageWhereInput;

    @Field(() => ImageUpdateInput, {nullable:false})
    @Type(() => ImageUpdateInput)
    data!: ImageUpdateInput;
}
