import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeDemographicUpdateanimeIDsInput } from './anime-demographic-updateanime-i-ds.input';
import { AnimeUncheckedUpdateManyWithoutDemographicsNestedInput } from '../anime/anime-unchecked-update-many-without-demographics-nested.input';

@InputType()
export class AnimeDemographicUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeDemographicUpdateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeDemographicUpdateanimeIDsInput;

    @Field(() => AnimeUncheckedUpdateManyWithoutDemographicsNestedInput, {nullable:true})
    animes?: AnimeUncheckedUpdateManyWithoutDemographicsNestedInput;
}
