import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumAnimeStudioRoleWithAggregatesFilter } from '../prisma/enum-anime-studio-role-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class AnimeStudioScalarWhereWithAggregatesInput {

    @Field(() => [AnimeStudioScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AnimeStudioScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeStudioScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AnimeStudioScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeStudioScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AnimeStudioScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    malId?: IntWithAggregatesFilter;

    @Field(() => EnumAnimeStudioRoleWithAggregatesFilter, {nullable:true})
    role?: EnumAnimeStudioRoleWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    animeIDs?: StringNullableListFilter;
}
