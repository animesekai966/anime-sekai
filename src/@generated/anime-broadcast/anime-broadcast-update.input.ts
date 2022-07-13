import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableEnumBroadcastDaysFieldUpdateOperationsInput } from '../prisma/nullable-enum-broadcast-days-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class AnimeBroadcastUpdateInput {

    @Field(() => NullableEnumBroadcastDaysFieldUpdateOperationsInput, {nullable:true})
    day?: NullableEnumBroadcastDaysFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    time?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    timezone?: NullableStringFieldUpdateOperationsInput;
}
