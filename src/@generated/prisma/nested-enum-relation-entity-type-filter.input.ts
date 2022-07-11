import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationEntityType } from './relation-entity-type.enum';

@InputType()
export class NestedEnumRelationEntityTypeFilter {

    @Field(() => RelationEntityType, {nullable:true})
    equals?: keyof typeof RelationEntityType;

    @Field(() => [RelationEntityType], {nullable:true})
    in?: Array<keyof typeof RelationEntityType>;

    @Field(() => [RelationEntityType], {nullable:true})
    notIn?: Array<keyof typeof RelationEntityType>;

    @Field(() => NestedEnumRelationEntityTypeFilter, {nullable:true})
    not?: NestedEnumRelationEntityTypeFilter;
}
