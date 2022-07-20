import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterNameObjectEqualityInput {

    @Field(() => String, {nullable:true})
    first?: string;

    @Field(() => String, {nullable:true})
    middle?: string;

    @Field(() => String, {nullable:true})
    last?: string;

    @Field(() => String, {nullable:true})
    full?: string;

    @Field(() => String, {nullable:true})
    native?: string;

    @Field(() => [String], {nullable:true})
    alternative?: Array<string>;

    @Field(() => [String], {nullable:true})
    alternativeSpoiler?: Array<string>;
}
