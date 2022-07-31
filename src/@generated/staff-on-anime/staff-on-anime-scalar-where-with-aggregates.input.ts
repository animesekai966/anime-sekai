import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { HideField } from '@nestjs/graphql';

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

    @HideField()
    relationId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    role?: StringWithAggregatesFilter;

    @HideField()
    animeId?: StringWithAggregatesFilter;

    @HideField()
    staffId?: StringWithAggregatesFilter;
}
