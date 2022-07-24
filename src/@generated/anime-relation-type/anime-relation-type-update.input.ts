import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { EnumAnimeRelationFieldUpdateOperationsInput } from '../prisma/enum-anime-relation-field-update-operations.input';

@InputType()
export class AnimeRelationTypeUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    anilistId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => EnumAnimeRelationFieldUpdateOperationsInput, {nullable:true})
    type?: EnumAnimeRelationFieldUpdateOperationsInput;
}
