import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffUpdateManyMutationInput } from './staff-update-many-mutation.input';
import { Type } from 'class-transformer';
import { StaffWhereInput } from './staff-where.input';

@ArgsType()
export class UpdateManyStaffArgs {

    @Field(() => StaffUpdateManyMutationInput, {nullable:false})
    @Type(() => StaffUpdateManyMutationInput)
    data!: StaffUpdateManyMutationInput;

    @Field(() => StaffWhereInput, {nullable:true})
    @Type(() => StaffWhereInput)
    where?: StaffWhereInput;
}
