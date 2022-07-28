import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffWhereUniqueInput } from './staff-where-unique.input';
import { Type } from 'class-transformer';
import { StaffCreateWithoutAnimeRolesInput } from './staff-create-without-anime-roles.input';

@InputType()
export class StaffCreateOrConnectWithoutAnimeRolesInput {

    @Field(() => StaffWhereUniqueInput, {nullable:false})
    @Type(() => StaffWhereUniqueInput)
    where!: StaffWhereUniqueInput;

    @Field(() => StaffCreateWithoutAnimeRolesInput, {nullable:false})
    @Type(() => StaffCreateWithoutAnimeRolesInput)
    create!: StaffCreateWithoutAnimeRolesInput;
}
