import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';
import { CharacterUpdateOneRequiredWithoutAnimesNestedInput } from '../character/character-update-one-required-without-animes-nested.input';
import { AnimeUpdateOneRequiredWithoutCharactersNestedInput } from '../anime/anime-update-one-required-without-characters-nested.input';

@InputType()
export class CharactersOnAnimesUpdateWithoutStaffInput {

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;

    @Field(() => CharacterUpdateOneRequiredWithoutAnimesNestedInput, {nullable:true})
    character?: CharacterUpdateOneRequiredWithoutAnimesNestedInput;

    @Field(() => AnimeUpdateOneRequiredWithoutCharactersNestedInput, {nullable:true})
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput;
}
