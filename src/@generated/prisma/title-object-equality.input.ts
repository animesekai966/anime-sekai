import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class TitleObjectEqualityInput {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:false})
    romaji!: string;

    @Field(() => [String], {nullable:true})
    synonyms?: Array<string>;
}
