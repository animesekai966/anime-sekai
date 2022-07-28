import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageObjectEqualityInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    source!: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;
}
