import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffImageCreateInput } from './staff-image-create.input';
import { Type } from 'class-transformer';

@InputType()
export class StaffImageCreateEnvelopeInput {

    @Field(() => StaffImageCreateInput, {nullable:true})
    @Type(() => StaffImageCreateInput)
    set?: StaffImageCreateInput;
}
