import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeWhereInput } from './staff-on-anime-where.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeOrderByWithAggregationInput } from './staff-on-anime-order-by-with-aggregation.input';
import { StaffOnAnimeScalarFieldEnum } from './staff-on-anime-scalar-field.enum';
import { StaffOnAnimeScalarWhereWithAggregatesInput } from './staff-on-anime-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StaffOnAnimeCountAggregateInput } from './staff-on-anime-count-aggregate.input';
import { StaffOnAnimeMinAggregateInput } from './staff-on-anime-min-aggregate.input';
import { StaffOnAnimeMaxAggregateInput } from './staff-on-anime-max-aggregate.input';

@ArgsType()
export class StaffOnAnimeGroupByArgs {

    @Field(() => StaffOnAnimeWhereInput, {nullable:true})
    @Type(() => StaffOnAnimeWhereInput)
    where?: StaffOnAnimeWhereInput;

    @Field(() => [StaffOnAnimeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StaffOnAnimeOrderByWithAggregationInput>;

    @Field(() => [StaffOnAnimeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StaffOnAnimeScalarFieldEnum>;

    @Field(() => StaffOnAnimeScalarWhereWithAggregatesInput, {nullable:true})
    having?: StaffOnAnimeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StaffOnAnimeCountAggregateInput, {nullable:true})
    _count?: StaffOnAnimeCountAggregateInput;

    @Field(() => StaffOnAnimeMinAggregateInput, {nullable:true})
    _min?: StaffOnAnimeMinAggregateInput;

    @Field(() => StaffOnAnimeMaxAggregateInput, {nullable:true})
    _max?: StaffOnAnimeMaxAggregateInput;
}
