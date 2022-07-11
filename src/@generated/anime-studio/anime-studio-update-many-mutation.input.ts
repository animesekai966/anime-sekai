import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumAnimeStudioRoleFieldUpdateOperationsInput } from '../prisma/enum-anime-studio-role-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeStudioUpdateanimeIDsInput } from './anime-studio-updateanime-i-ds.input';

@InputType()
export class AnimeStudioUpdateManyMutationInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumAnimeStudioRoleFieldUpdateOperationsInput, {nullable:true})
    role?: EnumAnimeStudioRoleFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeStudioUpdateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeStudioUpdateanimeIDsInput;
}
