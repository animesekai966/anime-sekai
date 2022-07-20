import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CharacterName {

    @Field(() => String, {nullable:true})
    first!: string | null;

    @Field(() => String, {nullable:true})
    middle!: string | null;

    @Field(() => String, {nullable:true})
    last!: string | null;

    @Field(() => String, {nullable:true})
    full!: string | null;

    @Field(() => String, {nullable:true})
    native!: string | null;

    @Field(() => [String], {nullable:true})
    alternative!: Array<string>;

    @Field(() => [String], {nullable:true})
    alternativeSpoiler!: Array<string>;
}
