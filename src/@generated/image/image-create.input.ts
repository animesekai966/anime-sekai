import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class ImageCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    source!: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;
}
