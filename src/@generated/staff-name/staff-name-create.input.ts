import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffNameCreatealternatesInput } from './staff-name-createalternates.input';

@InputType()
export class StaffNameCreateInput {

    @Field(() => String, {nullable:false})
    english!: string;

    @Field(() => String, {nullable:false})
    native!: string;

    @Field(() => String, {nullable:false})
    nativeFamily!: string;

    @Field(() => StaffNameCreatealternatesInput, {nullable:true})
    alternates?: StaffNameCreatealternatesInput;
}
