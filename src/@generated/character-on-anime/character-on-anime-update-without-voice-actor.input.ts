import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeUpdateOneRequiredWithoutCharactersNestedInput } from '../anime/anime-update-one-required-without-characters-nested.input';
import { CharacterUpdateOneRequiredWithoutAnimeNestedInput } from '../character/character-update-one-required-without-anime-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';

@InputType()
export class CharacterOnAnimeUpdateWithoutVoiceActorInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUpdateOneRequiredWithoutCharactersNestedInput, {nullable:true})
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput;

    @Field(() => CharacterUpdateOneRequiredWithoutAnimeNestedInput, {nullable:true})
    character?: CharacterUpdateOneRequiredWithoutAnimeNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;
}
