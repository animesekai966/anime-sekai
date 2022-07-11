import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { EnumAnimeRelationFieldUpdateOperationsInput } from '../prisma/enum-anime-relation-field-update-operations.input';
import { EnumRelationTypeFieldUpdateOperationsInput } from '../prisma/enum-relation-type-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';

@InputType()
export class RelatedAnimeUpdateInput {

    @Field(() => EnumAnimeRelationFieldUpdateOperationsInput, {nullable:true})
    relation?: EnumAnimeRelationFieldUpdateOperationsInput;

    @Field(() => EnumRelationTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumRelationTypeFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;
}
