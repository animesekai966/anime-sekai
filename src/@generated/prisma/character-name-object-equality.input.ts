import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CharacterNameObjectEqualityInput {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:false})
    native!: string;

    @Field(() => [String], {nullable:true})
    alternates?: Array<string>;
}
