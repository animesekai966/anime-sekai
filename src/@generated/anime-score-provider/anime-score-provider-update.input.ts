import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NullableFloatFieldUpdateOperationsInput } from '../prisma/nullable-float-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';

@InputType()
export class AnimeScoreProviderUpdateInput {

    @Field(() => NullableFloatFieldUpdateOperationsInput, {nullable:true})
    score?: NullableFloatFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    scoredBy?: NullableIntFieldUpdateOperationsInput;
}
