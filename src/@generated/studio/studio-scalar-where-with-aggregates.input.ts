import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

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
}
