import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumCharacterRoleWithAggregatesFilter } from '../prisma/enum-character-role-with-aggregates-filter.input';

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

    @Field(() => EnumCharacterRoleWithAggregatesFilter, {nullable:true})
    role?: EnumCharacterRoleWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    animeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    staffId?: StringWithAggregatesFilter;
}
