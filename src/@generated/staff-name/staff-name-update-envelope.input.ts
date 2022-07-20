import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffNameCreateInput } from './staff-name-create.input';
import { Type } from 'class-transformer';
import { StaffNameUpdateInput } from './staff-name-update.input';

@InputType()
export class StaffNameUpdateEnvelopeInput {

    @Field(() => StaffNameCreateInput, {nullable:true})
    @Type(() => StaffNameCreateInput)
    set?: StaffNameCreateInput;

    @Field(() => StaffNameUpdateInput, {nullable:true})
    @Type(() => StaffNameUpdateInput)
    update?: StaffNameUpdateInput;
}
