import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { CharacterNameUpdatealternativeInput } from './character-name-updatealternative.input';
import { CharacterNameUpdatealternativeSpoilerInput } from './character-name-updatealternative-spoiler.input';

@InputType()
export class CharacterNameUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    first?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    middle?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    last?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    full?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    native?: NullableStringFieldUpdateOperationsInput;

    @Field(() => CharacterNameUpdatealternativeInput, {nullable:true})
    alternative?: CharacterNameUpdatealternativeInput;

    @Field(() => CharacterNameUpdatealternativeSpoilerInput, {nullable:true})
    alternativeSpoiler?: CharacterNameUpdatealternativeSpoilerInput;
}
