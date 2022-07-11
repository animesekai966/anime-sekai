import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTitleCreateInput } from './anime-title-create.input';
import { Type } from 'class-transformer';

@InputType()
export class AnimeTitleCreateEnvelopeInput {

    @Field(() => AnimeTitleCreateInput, {nullable:true})
    @Type(() => AnimeTitleCreateInput)
    set?: AnimeTitleCreateInput;
}
