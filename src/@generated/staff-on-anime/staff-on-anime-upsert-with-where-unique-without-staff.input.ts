import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeUpdateWithoutStaffInput } from './staff-on-anime-update-without-staff.input';
import { StaffOnAnimeCreateWithoutStaffInput } from './staff-on-anime-create-without-staff.input';

@InputType()
export class StaffOnAnimeUpsertWithWhereUniqueWithoutStaffInput {

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    where!: StaffOnAnimeWhereUniqueInput;

    @Field(() => StaffOnAnimeUpdateWithoutStaffInput, {nullable:false})
    @Type(() => StaffOnAnimeUpdateWithoutStaffInput)
    update!: StaffOnAnimeUpdateWithoutStaffInput;

    @Field(() => StaffOnAnimeCreateWithoutStaffInput, {nullable:false})
    @Type(() => StaffOnAnimeCreateWithoutStaffInput)
    create!: StaffOnAnimeCreateWithoutStaffInput;
}
