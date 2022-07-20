import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { Type } from 'class-transformer';
import { StaffCreateInput } from './staff-create.input';
import { StaffUpdateInput } from './staff-update.input';

@ArgsType()
export class UpsertOneStaffArgs {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    @Type(() => StaffWhereUniqueInput)
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateInput, {nullable:false})
    @Type(() => StaffCreateInput)
    create!: StaffCreateInput;

    @Field(() => StaffUpdateInput, {nullable:false})
    @Type(() => StaffUpdateInput)
    update!: StaffUpdateInput;
}
