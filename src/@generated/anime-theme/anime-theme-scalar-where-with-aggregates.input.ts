import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class AnimeThemeScalarWhereWithAggregatesInput {

    @Field(() => [AnimeThemeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AnimeThemeScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeThemeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AnimeThemeScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeThemeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AnimeThemeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    malId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    animeIDs?: StringNullableListFilter;
}
