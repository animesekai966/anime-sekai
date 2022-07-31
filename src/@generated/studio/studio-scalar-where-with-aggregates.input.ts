import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';
import { HideField } from '@nestjs/graphql';

@InputType()
export class StudioScalarWhereWithAggregatesInput {

    @Field(() => [StudioScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StudioScalarWhereWithAggregatesInput>;

    @Field(() => [StudioScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StudioScalarWhereWithAggregatesInput>;

    @Field(() => [StudioScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StudioScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    malId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @HideField()
    animatedAnimeIDs?: StringNullableListFilter;

    @HideField()
    producedAnimeIDs?: StringNullableListFilter;
}
