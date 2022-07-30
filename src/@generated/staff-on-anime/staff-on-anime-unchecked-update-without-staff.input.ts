import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';

@InputType()
export class StaffOnAnimeUncheckedUpdateWithoutStaffInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    animeId?: StringFieldUpdateOperationsInput;
}
