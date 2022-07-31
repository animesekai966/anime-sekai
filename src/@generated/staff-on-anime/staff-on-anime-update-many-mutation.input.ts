import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StaffOnAnimeUpdateManyMutationInput {

    @HideField()
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;
}
