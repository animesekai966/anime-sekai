import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAnimeBroadcastDaysFieldUpdateOperationsInput } from '../prisma/enum-anime-broadcast-days-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class AnimeBroadcastUpdateInput {

    @Field(() => EnumAnimeBroadcastDaysFieldUpdateOperationsInput, {nullable:true})
    day?: EnumAnimeBroadcastDaysFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    string?: StringFieldUpdateOperationsInput;
}
