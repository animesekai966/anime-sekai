import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTitleCreatesynonymsInput } from './anime-title-createsynonyms.input';

@InputType()
export class AnimeTitleCreateInput {

    @Field(() => String, {nullable:false})
    romaji!: string;

    @Field(() => String, {nullable:true})
    english?: string;

    @Field(() => String, {nullable:true})
    native?: string;

    @Field(() => AnimeTitleCreatesynonymsInput, {nullable:true})
    synonyms?: AnimeTitleCreatesynonymsInput;
}
