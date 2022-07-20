import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffUpdateInput } from './staff-update.input';
import { Type } from 'class-transformer';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@ArgsType()
export class UpdateOneStaffArgs {

    @Field(() => StaffUpdateInput, {nullable:false})
    @Type(() => StaffUpdateInput)
    data!: StaffUpdateInput;

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    @Type(() => StaffWhereUniqueInput)
    where!: StaffWhereUniqueInput;
}
