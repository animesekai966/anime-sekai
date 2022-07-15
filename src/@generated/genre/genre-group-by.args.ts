import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';
import { Type } from 'class-transformer';
import { GenreOrderByWithAggregationInput } from './genre-order-by-with-aggregation.input';
import { GenreScalarFieldEnum } from './genre-scalar-field.enum';
import { GenreScalarWhereWithAggregatesInput } from './genre-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { GenreCountAggregateInput } from './genre-count-aggregate.input';
import { GenreMinAggregateInput } from './genre-min-aggregate.input';
import { GenreMaxAggregateInput } from './genre-max-aggregate.input';

@ArgsType()
export class GenreGroupByArgs {

    @Field(() => GenreWhereInput, {nullable:true})
    @Type(() => GenreWhereInput)
    where?: GenreWhereInput;

    @Field(() => [GenreOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<GenreOrderByWithAggregationInput>;

    @Field(() => [GenreScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof GenreScalarFieldEnum>;

    @Field(() => GenreScalarWhereWithAggregatesInput, {nullable:true})
    having?: GenreScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => GenreCountAggregateInput, {nullable:true})
    _count?: GenreCountAggregateInput;

    @Field(() => GenreMinAggregateInput, {nullable:true})
    _min?: GenreMinAggregateInput;

    @Field(() => GenreMaxAggregateInput, {nullable:true})
    _max?: GenreMaxAggregateInput;
}
