import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeUncheckedUpdateManyWithoutProducersNestedInput } from '../anime/anime-unchecked-update-many-without-producers-nested.input';
import { StudioUpdateanimatedAnimeIDsInput } from './studio-updateanimated-anime-i-ds.input';
import { HideField } from '@nestjs/graphql';
import { StudioUpdateproducedAnimeIDsInput } from './studio-updateproduced-anime-i-ds.input';

@InputType()
export class StudioUncheckedUpdateWithoutAnimatedAnimeInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUncheckedUpdateManyWithoutProducersNestedInput, {nullable:true})
    producedAnime?: AnimeUncheckedUpdateManyWithoutProducersNestedInput;

    @HideField()
    animatedAnimeIDs?: StudioUpdateanimatedAnimeIDsInput;

    @HideField()
    producedAnimeIDs?: StudioUpdateproducedAnimeIDsInput;
}
