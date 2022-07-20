import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffWhereInput } from './staff-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyStaffArgs {

    @Field(() => StaffWhereInput, {nullable:true})
    @Type(() => StaffWhereInput)
    where?: StaffWhereInput;
}
