import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumCharacterRoleWithAggregatesFilter } from '../prisma/enum-character-role-with-aggregates-filter.input';

@InputType()
export class CharactersOnAnimesScalarWhereWithAggregatesInput {

    @Field(() => [CharactersOnAnimesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CharactersOnAnimesScalarWhereWithAggregatesInput>;

    @Field(() => [CharactersOnAnimesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CharactersOnAnimesScalarWhereWithAggregatesInput>;

    @Field(() => [CharactersOnAnimesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CharactersOnAnimesScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => EnumCharacterRoleWithAggregatesFilter, {nullable:true})
    role?: EnumCharacterRoleWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    characterId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    staffId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    animeId?: StringWithAggregatesFilter;
}
