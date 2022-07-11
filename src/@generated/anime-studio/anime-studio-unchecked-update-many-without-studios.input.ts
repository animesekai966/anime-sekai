import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumAnimeStudioTypeFieldUpdateOperationsInput } from '../prisma/enum-anime-studio-type-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeStudioUpdateanimeIDsInput } from './anime-studio-updateanime-i-ds.input';

@InputType()
export class AnimeStudioUncheckedUpdateManyWithoutStudiosInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumAnimeStudioTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAnimeStudioTypeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeStudioUpdateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeStudioUpdateanimeIDsInput;
}
