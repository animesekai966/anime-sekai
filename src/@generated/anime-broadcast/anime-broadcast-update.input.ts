import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableEnumAnimeBroadcastDaysFieldUpdateOperationsInput } from '../prisma/nullable-enum-anime-broadcast-days-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';

@InputType()
export class AnimeBroadcastUpdateInput {

    @Field(() => NullableEnumAnimeBroadcastDaysFieldUpdateOperationsInput, {nullable:true})
    day?: NullableEnumAnimeBroadcastDaysFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    time?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    timezone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    string?: NullableStringFieldUpdateOperationsInput;
}
