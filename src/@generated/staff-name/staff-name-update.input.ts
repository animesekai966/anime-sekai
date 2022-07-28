import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { StaffNameUpdatealternatesInput } from './staff-name-updatealternates.input';

@InputType()
export class StaffNameUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    english?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    native?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    nativeFamily?: StringFieldUpdateOperationsInput;

    @Field(() => StaffNameUpdatealternatesInput, {nullable:true})
    alternates?: StaffNameUpdatealternatesInput;
}
