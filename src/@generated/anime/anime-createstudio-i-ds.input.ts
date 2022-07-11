import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeCreatestudioIDsInput {

    @Field(() => [String], {nullable:false})
    set!: Array<string>;
}
