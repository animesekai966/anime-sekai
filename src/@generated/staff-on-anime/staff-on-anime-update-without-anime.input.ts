import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HideField } from '@nestjs/graphql';
import { StaffUpdateOneRequiredWithoutAnimeRolesNestedInput } from '../staff/staff-update-one-required-without-anime-roles-nested.input';

@InputType()
export class StaffOnAnimeUpdateWithoutAnimeInput {

    @HideField()
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => StaffUpdateOneRequiredWithoutAnimeRolesNestedInput, {nullable:true})
    staff?: StaffUpdateOneRequiredWithoutAnimeRolesNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;
}
