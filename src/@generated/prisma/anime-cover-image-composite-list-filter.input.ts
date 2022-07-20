import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverImageObjectEqualityInput } from './anime-cover-image-object-equality.input';
import { AnimeCoverImageWhereInput } from '../anime-cover-image/anime-cover-image-where.input';

@InputType()
export class AnimeCoverImageCompositeListFilter {

    @Field(() => [AnimeCoverImageObjectEqualityInput], {nullable:true})
    equals?: Array<AnimeCoverImageObjectEqualityInput>;

    @Field(() => AnimeCoverImageWhereInput, {nullable:true})
    every?: AnimeCoverImageWhereInput;

    @Field(() => AnimeCoverImageWhereInput, {nullable:true})
    some?: AnimeCoverImageWhereInput;

    @Field(() => AnimeCoverImageWhereInput, {nullable:true})
    none?: AnimeCoverImageWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
