import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterRole } from './character-role.enum';
import { NestedIntFilter } from './nested-int-filter.input';
import { NestedEnumCharacterRoleFilter } from './nested-enum-character-role-filter.input';

@InputType()
export class NestedEnumCharacterRoleWithAggregatesFilter {

    @Field(() => CharacterRole, {nullable:true})
    equals?: keyof typeof CharacterRole;

    @Field(() => [CharacterRole], {nullable:true})
    in?: Array<keyof typeof CharacterRole>;

    @Field(() => [CharacterRole], {nullable:true})
    notIn?: Array<keyof typeof CharacterRole>;

    @Field(() => NestedEnumCharacterRoleWithAggregatesFilter, {nullable:true})
    not?: NestedEnumCharacterRoleWithAggregatesFilter;

    @Field(() => NestedIntFilter, {nullable:true})
    _count?: NestedIntFilter;

    @Field(() => NestedEnumCharacterRoleFilter, {nullable:true})
    _min?: NestedEnumCharacterRoleFilter;

    @Field(() => NestedEnumCharacterRoleFilter, {nullable:true})
    _max?: NestedEnumCharacterRoleFilter;
}
