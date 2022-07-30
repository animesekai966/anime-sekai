import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffScalarWhereInput } from './staff-scalar-where.input';
import { Type } from 'class-transformer';
import { StaffUpdateManyMutationInput } from './staff-update-many-mutation.input';

@InputType()
export class StaffUpdateManyWithWhereWithoutCharactersInput {

    @Field(() => StaffScalarWhereInput, {nullable:false})
    @Type(() => StaffScalarWhereInput)
    where!: StaffScalarWhereInput;

    @Field(() => StaffUpdateManyMutationInput, {nullable:false})
    @Type(() => StaffUpdateManyMutationInput)
    data!: StaffUpdateManyMutationInput;
}
