import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class AnimeTrailerUpdateInput {

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    url?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    thumbnail?: NullableStringFieldUpdateOperationsInput;
}
