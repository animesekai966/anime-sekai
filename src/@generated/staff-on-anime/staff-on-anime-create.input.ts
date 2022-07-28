import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeCreateNestedOneWithoutStaffInput } from '../anime/anime-create-nested-one-without-staff.input';
import { StaffCreateNestedOneWithoutAnimeRolesInput } from '../staff/staff-create-nested-one-without-anime-roles.input';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class StaffOnAnimeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => AnimeCreateNestedOneWithoutStaffInput, {nullable:false})
    anime!: AnimeCreateNestedOneWithoutStaffInput;

    @Field(() => StaffCreateNestedOneWithoutAnimeRolesInput, {nullable:false})
    staff!: StaffCreateNestedOneWithoutAnimeRolesInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;
}
