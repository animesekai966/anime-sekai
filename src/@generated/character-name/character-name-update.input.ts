import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CharacterNameUpdatealternatesInput } from './character-name-updatealternates.input';

@InputType()
export class CharacterNameUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    english?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    native?: StringFieldUpdateOperationsInput;

    @Field(() => CharacterNameUpdatealternatesInput, {nullable:true})
    alternates?: CharacterNameUpdatealternatesInput;
}
