import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class AnimeDescriptionUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    ar?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    en?: StringFieldUpdateOperationsInput;
}
