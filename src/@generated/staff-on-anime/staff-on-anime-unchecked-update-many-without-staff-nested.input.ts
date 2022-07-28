import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffOnAnimeCreateWithoutStaffInput } from './staff-on-anime-create-without-staff.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeCreateOrConnectWithoutStaffInput } from './staff-on-anime-create-or-connect-without-staff.input';
import { StaffOnAnimeUpsertWithWhereUniqueWithoutStaffInput } from './staff-on-anime-upsert-with-where-unique-without-staff.input';
import { StaffOnAnimeCreateManyStaffInputEnvelope } from './staff-on-anime-create-many-staff-input-envelope.input';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { StaffOnAnimeUpdateWithWhereUniqueWithoutStaffInput } from './staff-on-anime-update-with-where-unique-without-staff.input';
import { StaffOnAnimeUpdateManyWithWhereWithoutStaffInput } from './staff-on-anime-update-many-with-where-without-staff.input';
import { StaffOnAnimeScalarWhereInput } from './staff-on-anime-scalar-where.input';

@InputType()
export class StaffOnAnimeUncheckedUpdateManyWithoutStaffNestedInput {

    @Field(() => [StaffOnAnimeCreateWithoutStaffInput], {nullable:true})
    @Type(() => StaffOnAnimeCreateWithoutStaffInput)
    create?: Array<StaffOnAnimeCreateWithoutStaffInput>;

    @Field(() => [StaffOnAnimeCreateOrConnectWithoutStaffInput], {nullable:true})
    @Type(() => StaffOnAnimeCreateOrConnectWithoutStaffInput)
    connectOrCreate?: Array<StaffOnAnimeCreateOrConnectWithoutStaffInput>;

    @Field(() => [StaffOnAnimeUpsertWithWhereUniqueWithoutStaffInput], {nullable:true})
    @Type(() => StaffOnAnimeUpsertWithWhereUniqueWithoutStaffInput)
    upsert?: Array<StaffOnAnimeUpsertWithWhereUniqueWithoutStaffInput>;

    @Field(() => StaffOnAnimeCreateManyStaffInputEnvelope, {nullable:true})
    @Type(() => StaffOnAnimeCreateManyStaffInputEnvelope)
    createMany?: StaffOnAnimeCreateManyStaffInputEnvelope;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    set?: Array<StaffOnAnimeWhereUniqueInput>;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    disconnect?: Array<StaffOnAnimeWhereUniqueInput>;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    delete?: Array<StaffOnAnimeWhereUniqueInput>;

    @Field(() => [StaffOnAnimeWhereUniqueInput], {nullable:true})
    @Type(() => StaffOnAnimeWhereUniqueInput)
    connect?: Array<StaffOnAnimeWhereUniqueInput>;

    @Field(() => [StaffOnAnimeUpdateWithWhereUniqueWithoutStaffInput], {nullable:true})
    @Type(() => StaffOnAnimeUpdateWithWhereUniqueWithoutStaffInput)
    update?: Array<StaffOnAnimeUpdateWithWhereUniqueWithoutStaffInput>;

    @Field(() => [StaffOnAnimeUpdateManyWithWhereWithoutStaffInput], {nullable:true})
    @Type(() => StaffOnAnimeUpdateManyWithWhereWithoutStaffInput)
    updateMany?: Array<StaffOnAnimeUpdateManyWithWhereWithoutStaffInput>;

    @Field(() => [StaffOnAnimeScalarWhereInput], {nullable:true})
    @Type(() => StaffOnAnimeScalarWhereInput)
    deleteMany?: Array<StaffOnAnimeScalarWhereInput>;
}
