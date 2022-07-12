import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeStudioUpdateanimeIDsInput } from './anime-studio-updateanime-i-ds.input';
import { AnimeUncheckedUpdateManyWithoutProducersNestedInput } from '../anime/anime-unchecked-update-many-without-producers-nested.input';

@InputType()
export class AnimeStudioUncheckedUpdateWithoutAnimesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeStudioUpdateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeStudioUpdateanimeIDsInput;

    @Field(() => AnimeUncheckedUpdateManyWithoutProducersNestedInput, {nullable:true})
    animesProduced?: AnimeUncheckedUpdateManyWithoutProducersNestedInput;
}
