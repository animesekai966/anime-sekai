import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HideField } from '@nestjs/graphql';
import { AnimeCreateNestedOneWithoutStaffInput } from '../anime/anime-create-nested-one-without-staff.input';
import { StaffCreateNestedOneWithoutAnimeRolesInput } from '../staff/staff-create-nested-one-without-anime-roles.input';

@InputType()
export class StaffOnAnimeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @HideField()
    relationId!: string;

    @Field(() => AnimeCreateNestedOneWithoutStaffInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutStaffInput;

    @Field(() => StaffCreateNestedOneWithoutAnimeRolesInput, {nullable:false})
    staff!: StaffCreateNestedOneWithoutAnimeRolesInput;

    @Field(() => String, {nullable:false})
    role!: string;
}
