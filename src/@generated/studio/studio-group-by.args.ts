import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioWhereInput } from './studio-where.input';
import { Type } from 'class-transformer';
import { StudioOrderByWithAggregationInput } from './studio-order-by-with-aggregation.input';
import { StudioScalarFieldEnum } from './studio-scalar-field.enum';
import { StudioScalarWhereWithAggregatesInput } from './studio-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { StudioCountAggregateInput } from './studio-count-aggregate.input';
import { StudioAvgAggregateInput } from './studio-avg-aggregate.input';
import { StudioSumAggregateInput } from './studio-sum-aggregate.input';
import { StudioMinAggregateInput } from './studio-min-aggregate.input';
import { StudioMaxAggregateInput } from './studio-max-aggregate.input';

@ArgsType()
export class StudioGroupByArgs {

    @Field(() => StudioWhereInput, {nullable:true})
    @Type(() => StudioWhereInput)
    where?: StudioWhereInput;

    @Field(() => [StudioOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<StudioOrderByWithAggregationInput>;

    @Field(() => [StudioScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof StudioScalarFieldEnum>;

    @Field(() => StudioScalarWhereWithAggregatesInput, {nullable:true})
    having?: StudioScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StudioCountAggregateInput, {nullable:true})
    _count?: StudioCountAggregateInput;

    @Field(() => StudioAvgAggregateInput, {nullable:true})
    _avg?: StudioAvgAggregateInput;

    @Field(() => StudioSumAggregateInput, {nullable:true})
    _sum?: StudioSumAggregateInput;

    @Field(() => StudioMinAggregateInput, {nullable:true})
    _min?: StudioMinAggregateInput;

    @Field(() => StudioMaxAggregateInput, {nullable:true})
    _max?: StudioMaxAggregateInput;
}
