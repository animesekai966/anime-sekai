import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class StaffName {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:false})
    native!: string;

    @Field(() => String, {nullable:false})
    nativeFamily!: string;

    @Field(() => [String], {nullable:true})
    alternates!: Array<string>;
}
