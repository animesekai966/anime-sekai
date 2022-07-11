import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeThemeUpdateanimeIDsInput } from './anime-theme-updateanime-i-ds.input';

@InputType()
export class AnimeThemeUncheckedUpdateWithoutAnimesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeThemeUpdateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeThemeUpdateanimeIDsInput;
}
