import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';
import { EnumCharacterRoleWithAggregatesFilter } from '../prisma/enum-character-role-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class CharacterOnAnimeScalarWhereWithAggregatesInput {

    @Field(() => [CharacterOnAnimeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CharacterOnAnimeScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterOnAnimeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CharacterOnAnimeScalarWhereWithAggregatesInput>;

    @Field(() => [CharacterOnAnimeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CharacterOnAnimeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @HideField()
    relationId?: StringWithAggregatesFilter;

    @Field(() => EnumCharacterRoleWithAggregatesFilter, {nullable:true})
    role?: EnumCharacterRoleWithAggregatesFilter;

    @HideField()
    animeId?: StringWithAggregatesFilter;

    @HideField()
    staffId?: StringNullableListFilter;

    @HideField()
    characterId?: StringWithAggregatesFilter;
}
