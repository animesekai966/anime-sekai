import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CharacterNameUpdatealternatesInput } from './character-name-updatealternates.input';

@InputType()
export class CharacterNameUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    english?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    native?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arabic?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CharacterNameUpdatealternatesInput, {nullable:true})
    alternates?: CharacterNameUpdatealternatesInput;
}
