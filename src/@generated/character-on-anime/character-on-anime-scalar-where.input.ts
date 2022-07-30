import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { EnumCharacterRoleFilter } from '../prisma/enum-character-role-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class CharacterOnAnimeScalarWhereInput {

    @Field(() => [CharacterOnAnimeScalarWhereInput], {nullable:true})
    AND?: Array<CharacterOnAnimeScalarWhereInput>;

    @Field(() => [CharacterOnAnimeScalarWhereInput], {nullable:true})
    OR?: Array<CharacterOnAnimeScalarWhereInput>;

    @Field(() => [CharacterOnAnimeScalarWhereInput], {nullable:true})
    NOT?: Array<CharacterOnAnimeScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    relationId?: StringFilter;

    @Field(() => EnumCharacterRoleFilter, {nullable:true})
    role?: EnumCharacterRoleFilter;

    @Field(() => StringFilter, {nullable:true})
    animeId?: StringFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    staffId?: StringNullableListFilter;

    @Field(() => StringFilter, {nullable:true})
    characterId?: StringFilter;
}
