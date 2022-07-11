import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationType } from './relation-type.enum';

@InputType()
export class EnumRelationTypeFieldUpdateOperationsInput {

    @Field(() => RelationType, {nullable:true})
    set?: keyof typeof RelationType;
}
