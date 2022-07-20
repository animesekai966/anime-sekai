import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeUpdateManyWithoutProducersNestedInput } from '../anime/anime-update-many-without-producers-nested.input';
import { StudioUpdateanimatedAnimeIDsInput } from './studio-updateanimated-anime-i-ds.input';
import { StudioUpdateproducedAnimeIDsInput } from './studio-updateproduced-anime-i-ds.input';

@InputType()
export class StudioUpdateWithoutAnimatedAnimesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUpdateManyWithoutProducersNestedInput, {nullable:true})
    producedAnimes?: AnimeUpdateManyWithoutProducersNestedInput;

    @Field(() => StudioUpdateanimatedAnimeIDsInput, {nullable:true})
    animatedAnimeIDs?: StudioUpdateanimatedAnimeIDsInput;

    @Field(() => StudioUpdateproducedAnimeIDsInput, {nullable:true})
    producedAnimeIDs?: StudioUpdateproducedAnimeIDsInput;
}
