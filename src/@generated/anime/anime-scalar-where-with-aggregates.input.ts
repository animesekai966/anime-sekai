import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class AnimeScalarWhereWithAggregatesInput {

    @Field(() => [AnimeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<AnimeScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<AnimeScalarWhereWithAggregatesInput>;

    @Field(() => [AnimeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<AnimeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;
}
