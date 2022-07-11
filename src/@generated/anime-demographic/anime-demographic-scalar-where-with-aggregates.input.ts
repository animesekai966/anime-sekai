import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableListFilter } from '../prisma/string-nullable-list-filter.input';

@InputType()
export class AnimeDemographicScalarWhereWithAggregatesInput {

    @Field(() => [AnimeDemographicScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AnimeDemographicScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeDemographicScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AnimeDemographicScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeDemographicScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AnimeDemographicScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    malId?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringNullableListFilter, {nullable:true})
    animeIDs?: StringNullableListFilter;
}
