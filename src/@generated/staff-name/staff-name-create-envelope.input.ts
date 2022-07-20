import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffNameCreateInput } from './staff-name-create.input';
import { Type } from 'class-transformer';

@InputType()
export class StaffNameCreateEnvelopeInput {

    @Field(() => StaffNameCreateInput, {nullable:true})
    @Type(() => StaffNameCreateInput)
    set?: StaffNameCreateInput;
}
