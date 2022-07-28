import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeCreateWithoutStaffInput } from './staff-on-anime-create-without-staff.input';

@InputType()
export class StaffOnAnimeCreateOrConnectWithoutStaffInput {

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    where!: StaffOnAnimeWhereUniqueInput;

    @Field(() => StaffOnAnimeCreateWithoutStaffInput, {nullable:false})
    @Type(() => StaffOnAnimeCreateWithoutStaffInput)
    create!: StaffOnAnimeCreateWithoutStaffInput;
}
