import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { StaffNameUpdatealternativeInput } from './staff-name-updatealternative.input';

@InputType()
export class StaffNameUpdateInput {

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

    @Field(() => StaffNameUpdatealternativeInput, {nullable:true})
    alternative?: StaffNameUpdatealternativeInput;
}
