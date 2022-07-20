import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FloatFieldUpdateOperationsInput } from '../prisma/float-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class AnimeScoreProviderUpdateInput {

    @Field(() => FloatFieldUpdateOperationsInput, {nullable:true})
    score?: FloatFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    scoredBy?: IntFieldUpdateOperationsInput;
}
