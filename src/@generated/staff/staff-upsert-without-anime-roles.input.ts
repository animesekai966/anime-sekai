import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateWithoutAnimeRolesInput } from './staff-update-without-anime-roles.input';
import { Type } from 'class-transformer';
import { StaffCreateWithoutAnimeRolesInput } from './staff-create-without-anime-roles.input';

@InputType()
export class StaffUpsertWithoutAnimeRolesInput {

    @Field(() => StaffUpdateWithoutAnimeRolesInput, {nullable:false})
    @Type(() => StaffUpdateWithoutAnimeRolesInput)
    update!: StaffUpdateWithoutAnimeRolesInput;

    @Field(() => StaffCreateWithoutAnimeRolesInput, {nullable:false})
    @Type(() => StaffCreateWithoutAnimeRolesInput)
    create!: StaffCreateWithoutAnimeRolesInput;
}
