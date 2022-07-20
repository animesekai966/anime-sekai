import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateWithoutAnimesInput } from './staff-update-without-animes.input';
import { Type } from 'class-transformer';
import { StaffCreateWithoutAnimesInput } from './staff-create-without-animes.input';

@InputType()
export class StaffUpsertWithoutAnimesInput {

    @Field(() => StaffUpdateWithoutAnimesInput, {nullable:false})
    @Type(() => StaffUpdateWithoutAnimesInput)
    update!: StaffUpdateWithoutAnimesInput;

    @Field(() => StaffCreateWithoutAnimesInput, {nullable:false})
    @Type(() => StaffCreateWithoutAnimesInput)
    create!: StaffCreateWithoutAnimesInput;
}
