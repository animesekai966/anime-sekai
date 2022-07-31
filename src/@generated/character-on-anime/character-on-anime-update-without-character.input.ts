import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { AnimeUpdateOneRequiredWithoutCharactersNestedInput } from '../anime/anime-update-one-required-without-characters-nested.input';
import { StaffUpdateManyWithoutCharactersNestedInput } from '../staff/staff-update-many-without-characters-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';
import { CharacterOnAnimeUpdatestaffIdInput } from './character-on-anime-updatestaff-id.input';

@InputType()
export class CharacterOnAnimeUpdateWithoutCharacterInput {

    @HideField()
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUpdateOneRequiredWithoutCharactersNestedInput, {nullable:true})
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput;

    @Field(() => StaffUpdateManyWithoutCharactersNestedInput, {nullable:true})
    voiceActors?: StaffUpdateManyWithoutCharactersNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;

    @HideField()
    staffId?: CharacterOnAnimeUpdatestaffIdInput;
}
