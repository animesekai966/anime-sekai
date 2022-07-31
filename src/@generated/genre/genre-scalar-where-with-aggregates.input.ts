import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { EnumGenreTypeWithAggregatesFilter } from '../prisma/enum-genre-type-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class GenreScalarWhereWithAggregatesInput {

    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => [GenreScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<GenreScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    malId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumGenreTypeWithAggregatesFilter, {nullable:true})
    type?: EnumGenreTypeWithAggregatesFilter;

    @HideField()
    animeIDs?: StringNullableListFilter;
}
