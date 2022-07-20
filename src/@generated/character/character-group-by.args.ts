import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereInput } from './character-where.input';
import { Type } from 'class-transformer';
import { CharacterOrderByWithAggregationInput } from './character-order-by-with-aggregation.input';
import { CharacterScalarFieldEnum } from './character-scalar-field.enum';
import { CharacterScalarWhereWithAggregatesInput } from './character-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CharacterCountAggregateInput } from './character-count-aggregate.input';
import { CharacterAvgAggregateInput } from './character-avg-aggregate.input';
import { CharacterSumAggregateInput } from './character-sum-aggregate.input';
import { CharacterMinAggregateInput } from './character-min-aggregate.input';
import { CharacterMaxAggregateInput } from './character-max-aggregate.input';

@ArgsType()
export class CharacterGroupByArgs {

    @Field(() => CharacterWhereInput, {nullable:true})
    @Type(() => CharacterWhereInput)
    where?: CharacterWhereInput;

    @Field(() => [CharacterOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CharacterOrderByWithAggregationInput>;

    @Field(() => [CharacterScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CharacterScalarFieldEnum>;

    @Field(() => CharacterScalarWhereWithAggregatesInput, {nullable:true})
    having?: CharacterScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CharacterCountAggregateInput, {nullable:true})
    _count?: CharacterCountAggregateInput;

    @Field(() => CharacterAvgAggregateInput, {nullable:true})
    _avg?: CharacterAvgAggregateInput;

    @Field(() => CharacterSumAggregateInput, {nullable:true})
    _sum?: CharacterSumAggregateInput;

    @Field(() => CharacterMinAggregateInput, {nullable:true})
    _min?: CharacterMinAggregateInput;

    @Field(() => CharacterMaxAggregateInput, {nullable:true})
    _max?: CharacterMaxAggregateInput;
}
