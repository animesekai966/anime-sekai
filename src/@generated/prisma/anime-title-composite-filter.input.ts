import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTitleObjectEqualityInput } from './anime-title-object-equality.input';
import { AnimeTitleWhereInput } from '../anime-title/anime-title-where.input';

@InputType()
export class AnimeTitleCompositeFilter {

    @Field(() => AnimeTitleObjectEqualityInput, {nullable:true})
    equals?: AnimeTitleObjectEqualityInput;

    @Field(() => AnimeTitleWhereInput, {nullable:true})
    is?: AnimeTitleWhereInput;

    @Field(() => AnimeTitleWhereInput, {nullable:true})
    isNot?: AnimeTitleWhereInput;
}
