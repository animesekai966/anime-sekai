import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverImageObjectEqualityInput } from './anime-cover-image-object-equality.input';
import { AnimeCoverImageWhereInput } from '../anime-cover-image/anime-cover-image-where.input';

@InputType()
export class AnimeCoverImageCompositeFilter {

    @Field(() => AnimeCoverImageObjectEqualityInput, {nullable:true})
    equals?: AnimeCoverImageObjectEqualityInput;

    @Field(() => AnimeCoverImageWhereInput, {nullable:true})
    is?: AnimeCoverImageWhereInput;

    @Field(() => AnimeCoverImageWhereInput, {nullable:true})
    isNot?: AnimeCoverImageWhereInput;
}
