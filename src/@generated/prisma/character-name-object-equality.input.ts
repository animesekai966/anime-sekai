import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterNameObjectEqualityInput {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:true})
    native?: string;

    @Field(() => String, {nullable:true})
    arabic?: string;

    @Field(() => [String], {nullable:true})
    alternates?: Array<string>;
}
