import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StaffNameUpdatealternatesInput } from './staff-name-updatealternates.input';

@InputType()
export class StaffNameUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    english?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    arabic?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    native?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    nativeFamily?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StaffNameUpdatealternatesInput, {nullable:true})
    alternates?: StaffNameUpdatealternatesInput;
}
