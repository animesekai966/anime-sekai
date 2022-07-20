import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffCreateInput } from './staff-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneStaffArgs {

    @Field(() => StaffCreateInput, {nullable:false})
    @Type(() => StaffCreateInput)
    data!: StaffCreateInput;
}
