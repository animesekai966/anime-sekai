import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffCreateManyInput } from './staff-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyStaffArgs {

    @Field(() => [StaffCreateManyInput], {nullable:false})
    @Type(() => StaffCreateManyInput)
    data!: Array<StaffCreateManyInput>;
}
