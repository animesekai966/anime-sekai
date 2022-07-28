import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeCreateWithoutStaffInput } from './staff-on-anime-create-without-staff.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeCreateOrConnectWithoutStaffInput } from './staff-on-anime-create-or-connect-without-staff.input';
import { StaffOnAnimeCreateManyStaffInputEnvelope } from './staff-on-anime-create-many-staff-input-envelope.input';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';

@InputType()
export class StaffOnAnimeCreateNestedManyWithoutStaffInput {

    @Field(() => [StaffOnAnimeCreateWithoutStaffInput], {nullable:true})
    @Type(() => StaffOnAnimeCreateWithoutStaffInput)
    create?: Array<StaffOnAnimeCreateWithoutStaffInput>;

    @Field(() => [StaffOnAnimeCreateOrConnectWithoutStaffInput], {nullable:true})
    @Type(() => StaffOnAnimeCreateOrConnectWithoutStaffInput)
    connectOrCreate?: Array<StaffOnAnimeCreateOrConnectWithoutStaffInput>;

    @Field(() => StaffOnAnimeCreateManyStaffInputEnvelope, {nullable:true})
    @Type(() => StaffOnAnimeCreateManyStaffInputEnvelope)
    createMany?: StaffOnAnimeCreateManyStaffInputEnvelope;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    connect?: Array<StaffOnAnimeWhereUniqueInput>;
}
