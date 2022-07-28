import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeUpdateOneRequiredWithoutCharactersNestedInput } from '../anime/anime-update-one-required-without-characters-nested.input';
import { StaffUpdateOneRequiredWithoutCharactersNestedInput } from '../staff/staff-update-one-required-without-characters-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';

@InputType()
export class CharacterOnAnimeUpdateInput {

    @Field(() => AnimeUpdateOneRequiredWithoutCharactersNestedInput, {nullable:true})
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput;

    @Field(() => StaffUpdateOneRequiredWithoutCharactersNestedInput, {nullable:true})
    voiceActor?: StaffUpdateOneRequiredWithoutCharactersNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;
}
