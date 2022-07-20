import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateWithoutStaffInput } from './characters-on-animes-create-without-staff.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateOrConnectWithoutStaffInput } from './characters-on-animes-create-or-connect-without-staff.input';
import { CharactersOnAnimesUpsertWithWhereUniqueWithoutStaffInput } from './characters-on-animes-upsert-with-where-unique-without-staff.input';
import { CharactersOnAnimesCreateManyStaffInputEnvelope } from './characters-on-animes-create-many-staff-input-envelope.input';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { CharactersOnAnimesUpdateWithWhereUniqueWithoutStaffInput } from './characters-on-animes-update-with-where-unique-without-staff.input';
import { CharactersOnAnimesUpdateManyWithWhereWithoutStaffInput } from './characters-on-animes-update-many-with-where-without-staff.input';
import { CharactersOnAnimesScalarWhereInput } from './characters-on-animes-scalar-where.input';

@InputType()
export class CharactersOnAnimesUpdateManyWithoutStaffNestedInput {

    @Field(() => [CharactersOnAnimesCreateWithoutStaffInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateWithoutStaffInput)
    create?: Array<CharactersOnAnimesCreateWithoutStaffInput>;

    @Field(() => [CharactersOnAnimesCreateOrConnectWithoutStaffInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateOrConnectWithoutStaffInput)
    connectOrCreate?: Array<CharactersOnAnimesCreateOrConnectWithoutStaffInput>;

    @Field(() => [CharactersOnAnimesUpsertWithWhereUniqueWithoutStaffInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpsertWithWhereUniqueWithoutStaffInput)
    upsert?: Array<CharactersOnAnimesUpsertWithWhereUniqueWithoutStaffInput>;

    @Field(() => CharactersOnAnimesCreateManyStaffInputEnvelope, {nullable:true})
    @Type(() => CharactersOnAnimesCreateManyStaffInputEnvelope)
    createMany?: CharactersOnAnimesCreateManyStaffInputEnvelope;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    set?: Array<CharactersOnAnimesWhereUniqueInput>;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    disconnect?: Array<CharactersOnAnimesWhereUniqueInput>;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    delete?: Array<CharactersOnAnimesWhereUniqueInput>;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    connect?: Array<CharactersOnAnimesWhereUniqueInput>;

    @Field(() => [CharactersOnAnimesUpdateWithWhereUniqueWithoutStaffInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpdateWithWhereUniqueWithoutStaffInput)
    update?: Array<CharactersOnAnimesUpdateWithWhereUniqueWithoutStaffInput>;

    @Field(() => [CharactersOnAnimesUpdateManyWithWhereWithoutStaffInput], {nullable:true})
    @Type(() => CharactersOnAnimesUpdateManyWithWhereWithoutStaffInput)
    updateMany?: Array<CharactersOnAnimesUpdateManyWithWhereWithoutStaffInput>;

    @Field(() => [CharactersOnAnimesScalarWhereInput], {nullable:true})
    @Type(() => CharactersOnAnimesScalarWhereInput)
    deleteMany?: Array<CharactersOnAnimesScalarWhereInput>;
}
