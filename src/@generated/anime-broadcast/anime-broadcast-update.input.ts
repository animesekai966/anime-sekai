import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumBroadcastDaysFieldUpdateOperationsInput } from '../prisma/enum-broadcast-days-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class AnimeBroadcastUpdateInput {

    @Field(() => EnumBroadcastDaysFieldUpdateOperationsInput, {nullable:true})
    day?: EnumBroadcastDaysFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    time?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    timezone?: StringFieldUpdateOperationsInput;
}
