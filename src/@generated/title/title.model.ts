import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Title {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:false})
    romaji!: string;

    @Field(() => [String], {nullable:true})
    synonyms!: Array<string>;
}
