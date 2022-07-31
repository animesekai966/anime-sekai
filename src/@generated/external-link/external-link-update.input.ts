import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { EnumExternalLinkTypeFieldUpdateOperationsInput } from '../prisma/enum-external-link-type-field-update-operations.input';

@InputType()
export class ExternalLinkUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    site?: NullableStringFieldUpdateOperationsInput;

    @Field(() => EnumExternalLinkTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumExternalLinkTypeFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    language?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    color?: NullableStringFieldUpdateOperationsInput;
}
