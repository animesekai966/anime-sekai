import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { EnumRelationTypeFieldUpdateOperationsInput } from '../prisma/enum-relation-type-field-update-operations.input';
import { EnumRelationEntityTypeFieldUpdateOperationsInput } from '../prisma/enum-relation-entity-type-field-update-operations.input';

@InputType()
export class RelatedAnimeUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    malId?: IntFieldUpdateOperationsInput;

    @Field(() => EnumRelationTypeFieldUpdateOperationsInput, {nullable:true})
    relation?: EnumRelationTypeFieldUpdateOperationsInput;

    @Field(() => EnumRelationEntityTypeFieldUpdateOperationsInput, {nullable:true})
    type?: EnumRelationEntityTypeFieldUpdateOperationsInput;
}
