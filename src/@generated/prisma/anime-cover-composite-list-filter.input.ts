import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverObjectEqualityInput } from './anime-cover-object-equality.input';
import { AnimeCoverWhereInput } from '../anime-cover/anime-cover-where.input';

@InputType()
export class AnimeCoverCompositeListFilter {

    @Field(() => [AnimeCoverObjectEqualityInput], {nullable:true})
    equals?: Array<AnimeCoverObjectEqualityInput>;

    @Field(() => AnimeCoverWhereInput, {nullable:true})
    every?: AnimeCoverWhereInput;

    @Field(() => AnimeCoverWhereInput, {nullable:true})
    some?: AnimeCoverWhereInput;

    @Field(() => AnimeCoverWhereInput, {nullable:true})
    none?: AnimeCoverWhereInput;

    @Field(() => Boolean, {nullable:true})
    isEmpty?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSet?: boolean;
}
