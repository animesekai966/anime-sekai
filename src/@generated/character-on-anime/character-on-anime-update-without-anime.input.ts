import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StaffUpdateOneRequiredWithoutCharactersNestedInput } from '../staff/staff-update-one-required-without-characters-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';

@InputType()
export class CharacterOnAnimeUpdateWithoutAnimeInput {

    @Field(() => StaffUpdateOneRequiredWithoutCharactersNestedInput, {nullable:true})
    voiceActor?: StaffUpdateOneRequiredWithoutCharactersNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;
}
