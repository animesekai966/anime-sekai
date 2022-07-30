import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StaffUncheckedUpdateManyWithoutCharactersNestedInput } from '../staff/staff-unchecked-update-many-without-characters-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';
import { CharacterOnAnimeUpdatestaffIdInput } from './character-on-anime-updatestaff-id.input';

@InputType()
export class CharacterOnAnimeUncheckedUpdateWithoutCharacterInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => StaffUncheckedUpdateManyWithoutCharactersNestedInput, {nullable:true})
    voiceActors?: StaffUncheckedUpdateManyWithoutCharactersNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    animeId?: StringFieldUpdateOperationsInput;

    @Field(() => CharacterOnAnimeUpdatestaffIdInput, {nullable:true})
    staffId?: CharacterOnAnimeUpdatestaffIdInput;
}
