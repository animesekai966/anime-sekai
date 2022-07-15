import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StudioWhereInput } from './studio-where.input';
import { Type } from 'class-transformer';
import { StudioOrderByWithRelationInput } from './studio-order-by-with-relation.input';
import { StudioWhereUniqueInput } from './studio-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StudioCountAggregateInput } from './studio-count-aggregate.input';
import { StudioMinAggregateInput } from './studio-min-aggregate.input';
import { StudioMaxAggregateInput } from './studio-max-aggregate.input';

@ArgsType()
export class StudioAggregateArgs {

    @Field(() => StudioWhereInput, {nullable:true})
    @Type(() => StudioWhereInput)
    where?: StudioWhereInput;

    @Field(() => [StudioOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StudioOrderByWithRelationInput>;

    @Field(() => StudioWhereUniqueInput, {nullable:true})
    cursor?: StudioWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => StudioCountAggregateInput, {nullable:true})
    _count?: StudioCountAggregateInput;

    @Field(() => StudioMinAggregateInput, {nullable:true})
    _min?: StudioMinAggregateInput;

    @Field(() => StudioMaxAggregateInput, {nullable:true})
    _max?: StudioMaxAggregateInput;
}
