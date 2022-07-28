import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageObjectEqualityInput } from './image-object-equality.input';
import { ImageWhereInput } from '../image/image-where.input';

@InputType()
export class ImageCompositeListFilter {

    @Field(() => [ImageObjectEqualityInput], {nullable:true})
    equals?: Array<ImageObjectEqualityInput>;

    @Field(() => ImageWhereInput, {nullable:true})
    every?: ImageWhereInput;

    @Field(() => ImageWhereInput, {nullable:true})
    some?: ImageWhereInput;

    @Field(() => ImageWhereInput, {nullable:true})
    none?: ImageWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
