import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterRole } from './character-role.enum';
import { NestedEnumCharacterRoleFilter } from './nested-enum-character-role-filter.input';

@InputType()
export class EnumCharacterRoleFilter {

    @Field(() => CharacterRole, {nullable:true})
    equals?: keyof typeof CharacterRole;

    @Field(() => [CharacterRole], {nullable:true})
    in?: Array<keyof typeof CharacterRole>;

    @Field(() => [CharacterRole], {nullable:true})
    notIn?: Array<keyof typeof CharacterRole>;

    @Field(() => NestedEnumCharacterRoleFilter, {nullable:true})
    not?: NestedEnumCharacterRoleFilter;
}
