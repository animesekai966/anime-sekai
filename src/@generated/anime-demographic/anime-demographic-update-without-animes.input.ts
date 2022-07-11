import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { AnimeDemographicUpdateanimeIDsInput } from './anime-demographic-updateanime-i-ds.input';

@InputType()
export class AnimeDemographicUpdateWithoutAnimesInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => AnimeDemographicUpdateanimeIDsInput, {nullable:true})
    animeIDs?: AnimeDemographicUpdateanimeIDsInput;
}
