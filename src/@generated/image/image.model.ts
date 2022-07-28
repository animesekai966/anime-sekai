import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Image {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    source!: string;

    @Field(() => String, {nullable:false})
    key!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;
}
