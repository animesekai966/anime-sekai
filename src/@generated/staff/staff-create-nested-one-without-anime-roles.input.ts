import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateWithoutAnimeRolesInput } from './staff-create-without-anime-roles.input';
import { Type } from 'class-transformer';
import { StaffCreateOrConnectWithoutAnimeRolesInput } from './staff-create-or-connect-without-anime-roles.input';
import { StaffWhereUniqueInput } from './staff-where-unique.input';

@InputType()
export class StaffCreateNestedOneWithoutAnimeRolesInput {

    @Field(() => StaffCreateWithoutAnimeRolesInput, {nullable:true})
    @Type(() => StaffCreateWithoutAnimeRolesInput)
    create?: StaffCreateWithoutAnimeRolesInput;

    @Field(() => StaffCreateOrConnectWithoutAnimeRolesInput, {nullable:true})
    @Type(() => StaffCreateOrConnectWithoutAnimeRolesInput)
    connectOrCreate?: StaffCreateOrConnectWithoutAnimeRolesInput;

    @Field(() => StaffWhereUniqueInput, {nullable:true})
    @Type(() => StaffWhereUniqueInput)
    connect?: StaffWhereUniqueInput;
}
