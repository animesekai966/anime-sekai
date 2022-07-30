import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class StaffOnAnimeScalarWhereWithAggregatesInput {

    @Field(() => [StaffOnAnimeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<StaffOnAnimeScalarWhereWithAggregatesInput>;

    @Field(() => [StaffOnAnimeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<StaffOnAnimeScalarWhereWithAggregatesInput>;

    @Field(() => [StaffOnAnimeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<StaffOnAnimeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    relationId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    role?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    animeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    staffId?: StringWithAggregatesFilter;
}
