import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTitleCreateInput } from './anime-title-create.input';
import { Type } from 'class-transformer';
import { AnimeTitleUpdateInput } from './anime-title-update.input';

@InputType()
export class AnimeTitleUpdateEnvelopeInput {

    @Field(() => AnimeTitleCreateInput, {nullable:true})
    @Type(() => AnimeTitleCreateInput)
    set?: AnimeTitleCreateInput;

    @Field(() => AnimeTitleUpdateInput, {nullable:true})
    @Type(() => AnimeTitleUpdateInput)
    update?: AnimeTitleUpdateInput;
}
