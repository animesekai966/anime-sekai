import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutAnimeRolesInput } from './staff-create-without-anime-roles.input';
import { Type } from 'class-transformer';
import { StaffCreateOrConnectWithoutAnimeRolesInput } from './staff-create-or-connect-without-anime-roles.input';
import { StaffUpsertWithoutAnimeRolesInput } from './staff-upsert-without-anime-roles.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { StaffUpdateWithoutAnimeRolesInput } from './staff-update-without-anime-roles.input';

@InputType()
export class StaffUpdateOneRequiredWithoutAnimeRolesNestedInput {

    @Field(() => StaffCreateWithoutAnimeRolesInput, {nullable:true})
    @Type(() => StaffCreateWithoutAnimeRolesInput)
    create?: StaffCreateWithoutAnimeRolesInput;

    @Field(() => StaffCreateOrConnectWithoutAnimeRolesInput, {nullable:true})
    @Type(() => StaffCreateOrConnectWithoutAnimeRolesInput)
    connectOrCreate?: StaffCreateOrConnectWithoutAnimeRolesInput;

    @Field(() => StaffUpsertWithoutAnimeRolesInput, {nullable:true})
    @Type(() => StaffUpsertWithoutAnimeRolesInput)
    upsert?: StaffUpsertWithoutAnimeRolesInput;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    connect?: StaffWhereUniqueInput;

    @Field(() => StaffUpdateWithoutAnimeRolesInput, {nullable:true})
    @Type(() => StaffUpdateWithoutAnimeRolesInput)
    update?: StaffUpdateWithoutAnimeRolesInput;
}
