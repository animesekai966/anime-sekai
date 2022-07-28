import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeUpdateWithoutStaffInput } from './staff-on-anime-update-without-staff.input';

@InputType()
export class StaffOnAnimeUpdateWithWhereUniqueWithoutStaffInput {

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:false})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    where!: StaffOnAnimeWhereUniqueInput;

    @Field(() => StaffOnAnimeUpdateWithoutStaffInput, {nullable:false})
    @Type(() => StaffOnAnimeUpdateWithoutStaffInput)
    data!: StaffOnAnimeUpdateWithoutStaffInput;
}
