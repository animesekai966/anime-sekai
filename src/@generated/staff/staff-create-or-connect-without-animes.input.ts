import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { Type } from 'class-transformer';
import { StaffCreateWithoutAnimesInput } from './staff-create-without-animes.input';

@InputType()
export class StaffCreateOrConnectWithoutAnimesInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    @Type(() => StaffWhereUniqueInput)
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutAnimesInput, {nullable:false})
    @Type(() => StaffCreateWithoutAnimesInput)
    create!: StaffCreateWithoutAnimesInput;
}
