import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StaffImage {

    @Field(() => String, {nullable:false})
    large!: string;

    @Field(() => String, {nullable:false})
    medium!: string;

    @Field(() => String, {nullable:false})
    small!: string;
}
