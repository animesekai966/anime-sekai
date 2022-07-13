import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeTitleObjectEqualityInput {

    @Field(() => String, {nullable:false})
    romaji!: string;

    @Field(() => String, {nullable:true})
    english?: string;

    @Field(() => String, {nullable:true})
    native?: string;

    @Field(() => [String], {nullable:true})
    synonyms?: Array<string>;
}
