import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterRole } from './character-role.enum';

@InputType()
export class EnumCharacterRoleFieldUpdateOperationsInput {

    @Field(() => CharacterRole, {nullable:true})
    set?: keyof typeof CharacterRole;
}
