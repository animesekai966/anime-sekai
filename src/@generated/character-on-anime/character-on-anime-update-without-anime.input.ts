import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { StaffUpdateManyWithoutCharactersNestedInput } from '../staff/staff-update-many-without-characters-nested.input';
import { CharacterUpdateOneRequiredWithoutAnimeNestedInput } from '../character/character-update-one-required-without-anime-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';
import { CharacterOnAnimeUpdatestaffIdInput } from './character-on-anime-updatestaff-id.input';

@InputType()
export class CharacterOnAnimeUpdateWithoutAnimeInput {

    @HideField()
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => StaffUpdateManyWithoutCharactersNestedInput, {nullable:true})
    voiceActors?: StaffUpdateManyWithoutCharactersNestedInput;

    @Field(() => CharacterUpdateOneRequiredWithoutAnimeNestedInput, {nullable:true})
    character?: CharacterUpdateOneRequiredWithoutAnimeNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;

    @HideField()
    staffId?: CharacterOnAnimeUpdatestaffIdInput;
}
