import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeUncheckedUpdateManyWithoutStudiosNestedInput } from '../anime/anime-unchecked-update-many-without-studios-nested.input';
import { StudioUpdateanimatedAnimeIDsInput } from './studio-updateanimated-anime-i-ds.input';
import { StudioUpdateproducedAnimeIDsInput } from './studio-updateproduced-anime-i-ds.input';

@InputType()
export class StudioUncheckedUpdateWithoutProducedAnimesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeUncheckedUpdateManyWithoutStudiosNestedInput, {nullable:true})
    animatedAnimes?: AnimeUncheckedUpdateManyWithoutStudiosNestedInput;

    @Field(() => StudioUpdateanimatedAnimeIDsInput, {nullable:true})
    animatedAnimeIDs?: StudioUpdateanimatedAnimeIDsInput;

    @Field(() => StudioUpdateproducedAnimeIDsInput, {nullable:true})
    producedAnimeIDs?: StudioUpdateproducedAnimeIDsInput;
}
