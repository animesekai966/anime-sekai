import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeTitleCreatesynonymsInput } from './anime-title-createsynonyms.input';

@InputType()
export class AnimeTitleCreateInput {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:false})
    romaji!: string;

    @Field(() => AnimeTitleCreatesynonymsInput, {nullable:true})
    synonyms?: AnimeTitleCreatesynonymsInput;
}
