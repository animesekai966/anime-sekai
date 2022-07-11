import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationEntityType } from './relation-entity-type.enum';
import { NestedEnumRelationEntityTypeFilter } from './nested-enum-relation-entity-type-filter.input';

@InputType()
export class EnumRelationEntityTypeFilter {

    @Field(() => RelationEntityType, {nullable:true})
    equals?: keyof typeof RelationEntityType;

    @Field(() => [RelationEntityType], {nullable:true})
    in?: Array<keyof typeof RelationEntityType>;

    @Field(() => [RelationEntityType], {nullable:true})
    notIn?: Array<keyof typeof RelationEntityType>;

    @Field(() => NestedEnumRelationEntityTypeFilter, {nullable:true})
    not?: NestedEnumRelationEntityTypeFilter;
}
