import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageWhereInput } from '../image/image-where.input';
import { Type } from 'class-transformer';

@InputType()
export class ImageDeleteManyInput {

    @Field(() => ImageWhereInput, {nullable:false})
    @Type(() => ImageWhereInput)
    where!: ImageWhereInput;
}
