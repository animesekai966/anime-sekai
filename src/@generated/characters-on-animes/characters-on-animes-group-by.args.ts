import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereInput } from './characters-on-animes-where.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesOrderByWithAggregationInput } from './characters-on-animes-order-by-with-aggregation.input';
import { CharactersOnAnimesScalarFieldEnum } from './characters-on-animes-scalar-field.enum';
import { CharactersOnAnimesScalarWhereWithAggregatesInput } from './characters-on-animes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CharactersOnAnimesCountAggregateInput } from './characters-on-animes-count-aggregate.input';
import { CharactersOnAnimesMinAggregateInput } from './characters-on-animes-min-aggregate.input';
import { CharactersOnAnimesMaxAggregateInput } from './characters-on-animes-max-aggregate.input';

@ArgsType()
export class CharactersOnAnimesGroupByArgs {

    @Field(() => CharactersOnAnimesWhereInput, {nullable:true})
    @Type(() => CharactersOnAnimesWhereInput)
    where?: CharactersOnAnimesWhereInput;

    @Field(() => [CharactersOnAnimesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CharactersOnAnimesOrderByWithAggregationInput>;

    @Field(() => [CharactersOnAnimesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CharactersOnAnimesScalarFieldEnum>;

    @Field(() => CharactersOnAnimesScalarWhereWithAggregatesInput, {nullable:true})
    having?: CharactersOnAnimesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CharactersOnAnimesCountAggregateInput, {nullable:true})
    _count?: CharactersOnAnimesCountAggregateInput;

    @Field(() => CharactersOnAnimesMinAggregateInput, {nullable:true})
    _min?: CharactersOnAnimesMinAggregateInput;

    @Field(() => CharactersOnAnimesMaxAggregateInput, {nullable:true})
    _max?: CharactersOnAnimesMaxAggregateInput;
}
