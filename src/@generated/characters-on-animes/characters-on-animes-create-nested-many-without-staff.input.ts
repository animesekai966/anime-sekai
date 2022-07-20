import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharactersOnAnimesCreateWithoutStaffInput } from './characters-on-animes-create-without-staff.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesCreateOrConnectWithoutStaffInput } from './characters-on-animes-create-or-connect-without-staff.input';
import { CharactersOnAnimesCreateManyStaffInputEnvelope } from './characters-on-animes-create-many-staff-input-envelope.input';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';

@InputType()
export class CharactersOnAnimesCreateNestedManyWithoutStaffInput {

    @Field(() => [CharactersOnAnimesCreateWithoutStaffInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateWithoutStaffInput)
    create?: Array<CharactersOnAnimesCreateWithoutStaffInput>;

    @Field(() => [CharactersOnAnimesCreateOrConnectWithoutStaffInput], {nullable:true})
    @Type(() => CharactersOnAnimesCreateOrConnectWithoutStaffInput)
    connectOrCreate?: Array<CharactersOnAnimesCreateOrConnectWithoutStaffInput>;

    @Field(() => CharactersOnAnimesCreateManyStaffInputEnvelope, {nullable:true})
    @Type(() => CharactersOnAnimesCreateManyStaffInputEnvelope)
    createMany?: CharactersOnAnimesCreateManyStaffInputEnvelope;

    @Field(() => [CharactersOnAnimesWhereUniqueInput], {nullable:true})
    @Type(() => CharactersOnAnimesWhereUniqueInput)
    connect?: Array<CharactersOnAnimesWhereUniqueInput>;
}
