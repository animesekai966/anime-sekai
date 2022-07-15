import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { GenreWhereInput } from './genre-where.input';
import { Type } from 'class-transformer';
import { GenreOrderByWithRelationInput } from './genre-order-by-with-relation.input';
import { GenreWhereUniqueInput } from './genre-where-unique.input';
import { Int } from '@nestjs/graphql';
import { GenreCountAggregateInput } from './genre-count-aggregate.input';
import { GenreMinAggregateInput } from './genre-min-aggregate.input';
import { GenreMaxAggregateInput } from './genre-max-aggregate.input';

@ArgsType()
export class GenreAggregateArgs {

    @Field(() => GenreWhereInput, {nullable:true})
    @Type(() => GenreWhereInput)
    where?: GenreWhereInput;

    @Field(() => [GenreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<GenreOrderByWithRelationInput>;

    @Field(() => GenreWhereUniqueInput, {nullable:true})
    cursor?: GenreWhereUniqueInput;

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
