import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateOneRequiredWithoutAnimeRolesNestedInput } from '../staff/staff-update-one-required-without-anime-roles-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';

@InputType()
export class StaffOnAnimeUpdateWithoutAnimeInput {

    @Field(() => StaffUpdateOneRequiredWithoutAnimeRolesNestedInput, {nullable:true})
    staff?: StaffUpdateOneRequiredWithoutAnimeRolesNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;
}
