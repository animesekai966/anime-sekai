import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffCreateNestedOneWithoutAnimeRolesInput } from '../staff/staff-create-nested-one-without-anime-roles.input';
import { CharacterRole } from '../prisma/character-role.enum';

@InputType()
export class StaffOnAnimeCreateWithoutAnimeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => StaffCreateNestedOneWithoutAnimeRolesInput, {nullable:false})
    staff!: StaffCreateNestedOneWithoutAnimeRolesInput;

    @Field(() => CharacterRole, {nullable:false})
    role!: keyof typeof CharacterRole;
}
