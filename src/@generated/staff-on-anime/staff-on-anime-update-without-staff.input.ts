import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { AnimeUpdateOneRequiredWithoutStaffNestedInput } from '../anime/anime-update-one-required-without-staff-nested.input';

@InputType()
export class StaffOnAnimeUpdateWithoutStaffInput {

    @HideField()
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUpdateOneRequiredWithoutStaffNestedInput, {nullable:true})
    anime?: AnimeUpdateOneRequiredWithoutStaffNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;
}
