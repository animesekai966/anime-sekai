import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumCharacterRoleFieldUpdateOperationsInput } from '../prisma/enum-character-role-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class StaffOnAnimeUncheckedUpdateManyWithoutAnimeRolesInput {

    @Field(() => EnumCharacterRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumCharacterRoleFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    animeId?: StringFieldUpdateOperationsInput;
}
