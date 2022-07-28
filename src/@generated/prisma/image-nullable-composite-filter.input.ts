import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ImageObjectEqualityInput } from './image-object-equality.input';
import { ImageWhereInput } from '../image/image-where.input';

@InputType()
export class ImageNullableCompositeFilter {

    @Field(() => ImageObjectEqualityInput, {nullable:true})
    equals?: ImageObjectEqualityInput;

    @Field(() => ImageWhereInput, {nullable:true})
    is?: ImageWhereInput;

    @Field(() => ImageWhereInput, {nullable:true})
    isNot?: ImageWhereInput;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
