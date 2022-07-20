import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffNameCreatealternativeInput } from './staff-name-createalternative.input';

@InputType()
export class StaffNameCreateInput {

    @Field(() => String, {nullable:true})
    first?: string;

    @Field(() => String, {nullable:true})
    middle?: string;

    @Field(() => String, {nullable:true})
    last?: string;

    @Field(() => String, {nullable:true})
    full?: string;

    @Field(() => String, {nullable:true})
    native?: string;

    @Field(() => StaffNameCreatealternativeInput, {nullable:true})
    alternative?: StaffNameCreatealternativeInput;
}
