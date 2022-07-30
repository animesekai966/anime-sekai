import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';
import { CharacterOnAnimeUpdatestaffIdInput } from './character-on-anime-updatestaff-id.input';

@InputType()
export class CharacterOnAnimeUncheckedUpdateManyWithoutCharactersInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;

    @Field(() => CharacterOnAnimeUpdatestaffIdInput, {nullable:true})
    staffId?: CharacterOnAnimeUpdatestaffIdInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    characterId?: StringFieldUpdateOperationsInput;
}
