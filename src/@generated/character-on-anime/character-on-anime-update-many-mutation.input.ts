import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';

@InputType()
export class CharacterOnAnimeUpdateManyMutationInput {

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;
}
