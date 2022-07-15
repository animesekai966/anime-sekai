import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeUpdateManyWithoutStudiosNestedInput } from '../anime/anime-update-many-without-studios-nested.input';
import { AnimeStudioUpdateanimeIDsInput } from './anime-studio-updateanime-i-ds.input';
import { HideField } from '@nestjs/graphql';
import { AnimeUpdateManyWithoutProducersNestedInput } from '../anime/anime-update-many-without-producers-nested.input';

@InputType()
export class AnimeStudioUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUpdateManyWithoutStudiosNestedInput, {nullable:true})
    animes?: AnimeUpdateManyWithoutStudiosNestedInput;

    @HideField()
    animeIDs?: AnimeStudioUpdateanimeIDsInput;

    @HideField()
    animesProduced?: AnimeUpdateManyWithoutProducersNestedInput;
}
