import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeTrailerObjectEqualityInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    thumbnail?: string;
}
