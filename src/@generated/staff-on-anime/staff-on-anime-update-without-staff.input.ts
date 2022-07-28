import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeUpdateOneRequiredWithoutStaffNestedInput } from '../anime/anime-update-one-required-without-staff-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';

@InputType()
export class StaffOnAnimeUpdateWithoutStaffInput {

    @Field(() => AnimeUpdateOneRequiredWithoutStaffNestedInput, {nullable:true})
    anime?: AnimeUpdateOneRequiredWithoutStaffNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;
}
