import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class StaffImageCreateInput {

    @Field(() => String, {nullable:false})
    large!: string;

    @Field(() => String, {nullable:false})
    medium!: string;

    @Field(() => String, {nullable:false})
    small!: string;
}
