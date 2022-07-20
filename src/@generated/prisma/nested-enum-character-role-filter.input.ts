import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CharacterRole } from './character-role.enum';

@InputType()
export class NestedEnumCharacterRoleFilter {

    @Field(() => CharacterRole, {nullable:true})
    equals?: keyof typeof CharacterRole;

    @Field(() => [CharacterRole], {nullable:true})
    in?: Array<keyof typeof CharacterRole>;

    @Field(() => [CharacterRole], {nullable:true})
    notIn?: Array<keyof typeof CharacterRole>;

    @Field(() => NestedEnumCharacterRoleFilter, {nullable:true})
    not?: NestedEnumCharacterRoleFilter;
}
