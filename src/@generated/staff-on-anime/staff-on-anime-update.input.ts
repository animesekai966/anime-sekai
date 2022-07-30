import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeUpdateOneRequiredWithoutStaffNestedInput } from '../anime/anime-update-one-required-without-staff-nested.input';
import { StaffUpdateOneRequiredWithoutAnimeRolesNestedInput } from '../staff/staff-update-one-required-without-anime-roles-nested.input';

@InputType()
export class StaffOnAnimeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    relationId?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUpdateOneRequiredWithoutStaffNestedInput, {nullable:true})
    anime?: AnimeUpdateOneRequiredWithoutStaffNestedInput;

    @Field(() => StaffUpdateOneRequiredWithoutAnimeRolesNestedInput, {nullable:true})
    staff?: StaffUpdateOneRequiredWithoutAnimeRolesNestedInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    role?: StringFieldUpdateOperationsInput;
}
