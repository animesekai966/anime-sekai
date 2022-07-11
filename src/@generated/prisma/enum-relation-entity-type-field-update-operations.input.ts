import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationEntityType } from './relation-entity-type.enum';

@InputType()
export class EnumRelationEntityTypeFieldUpdateOperationsInput {

    @Field(() => RelationEntityType, {nullable:true})
    set?: keyof typeof RelationEntityType;
}
