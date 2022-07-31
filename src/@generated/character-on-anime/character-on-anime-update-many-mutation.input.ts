import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';
import { CharacterOnAnimeUpdatestaffIdInput } from './character-on-anime-updatestaff-id.input';

@InputType()
export class CharacterOnAnimeUpdateManyMutationInput {

    @HideField()
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;

    @HideField()
    staffId?: CharacterOnAnimeUpdatestaffIdInput;
}
