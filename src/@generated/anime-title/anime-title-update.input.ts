import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { AnimeTitleUpdatesynonymsInput } from './anime-title-updatesynonyms.input';

@InputType()
export class AnimeTitleUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    romaji?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    english?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    native?: NullableStringFieldUpdateOperationsInput;

    @Field(() => AnimeTitleUpdatesynonymsInput, {nullable:true})
    synonyms?: AnimeTitleUpdatesynonymsInput;
}
