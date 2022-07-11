import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RelationType } from './relation-type.enum';

@InputType()
export class NestedEnumRelationTypeFilter {

    @Field(() => RelationType, {nullable:true})
    equals?: keyof typeof RelationType;

    @Field(() => [RelationType], {nullable:true})
    in?: Array<keyof typeof RelationType>;

    @Field(() => [RelationType], {nullable:true})
    notIn?: Array<keyof typeof RelationType>;

    @Field(() => NestedEnumRelationTypeFilter, {nullable:true})
    not?: NestedEnumRelationTypeFilter;
}
