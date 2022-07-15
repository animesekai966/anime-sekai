import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeStudioUpdateanimeIDsInput } from './anime-studio-updateanime-i-ds.input';
import { HideField } from '@nestjs/graphql';
import { AnimeUncheckedUpdateManyWithoutProducersNestedInput } from '../anime/anime-unchecked-update-many-without-producers-nested.input';

@InputType()
export class AnimeStudioUncheckedUpdateWithoutAnimesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @HideField()
    animeIDs?: AnimeStudioUpdateanimeIDsInput;

    @HideField()
    animesProduced?: AnimeUncheckedUpdateManyWithoutProducersNestedInput;
}
