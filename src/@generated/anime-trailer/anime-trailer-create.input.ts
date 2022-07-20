import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeTrailerCreateInput {

    @Field(() => String, {nullable:true})
    url?: string;

    @Field(() => String, {nullable:true})
    thumbnail?: string;
}
