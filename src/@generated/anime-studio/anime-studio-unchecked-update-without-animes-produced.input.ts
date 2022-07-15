import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeUncheckedUpdateManyWithoutStudiosNestedInput } from '../anime/anime-unchecked-update-many-without-studios-nested.input';
import { AnimeStudioUpdateanimeIDsInput } from './anime-studio-updateanime-i-ds.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class AnimeStudioUncheckedUpdateWithoutAnimesProducedInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUncheckedUpdateManyWithoutStudiosNestedInput, {nullable:true})
    animes?: AnimeUncheckedUpdateManyWithoutStudiosNestedInput;

    @HideField()
    animeIDs?: AnimeStudioUpdateanimeIDsInput;
}
