import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AnimeUpdateOneRequiredWithoutCharactersNestedInput } from '../anime/anime-update-one-required-without-characters-nested.input';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';

@InputType()
export class CharacterOnAnimeUpdateWithoutVoiceActorInput {

    @Field(() => AnimeUpdateOneRequiredWithoutCharactersNestedInput, {nullable:true})
    anime?: AnimeUpdateOneRequiredWithoutCharactersNestedInput;

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;
}
