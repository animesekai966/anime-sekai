import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumServerQualityFieldUpdateOperationsInput } from '../prisma/enum-server-quality-field-update-operations.input';

@InputType()
export class ServerUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    translatedBy?: StringFieldUpdateOperationsInput;

    @Field(() => EnumServerQualityFieldUpdateOperationsInput, {nullable:true})
    quality?: EnumServerQualityFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    url?: StringFieldUpdateOperationsInput;
}
