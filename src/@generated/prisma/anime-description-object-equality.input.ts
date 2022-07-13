import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AnimeDescriptionObjectEqualityInput {

    @Field(() => String, {nullable:true})
    ar?: string;

    @Field(() => String, {nullable:true})
    en?: string;
}
