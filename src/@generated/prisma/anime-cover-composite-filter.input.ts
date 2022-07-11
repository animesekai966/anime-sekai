import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCoverObjectEqualityInput } from './anime-cover-object-equality.input';
import { AnimeCoverWhereInput } from '../anime-cover/anime-cover-where.input';

@InputType()
export class AnimeCoverCompositeFilter {

    @Field(() => AnimeCoverObjectEqualityInput, {nullable:true})
    equals?: AnimeCoverObjectEqualityInput;

    @Field(() => AnimeCoverWhereInput, {nullable:true})
    is?: AnimeCoverWhereInput;

    @Field(() => AnimeCoverWhereInput, {nullable:true})
    isNot?: AnimeCoverWhereInput;
}
