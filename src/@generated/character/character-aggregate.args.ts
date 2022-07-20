import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterWhereInput } from './character-where.input';
import { Type } from 'class-transformer';
import { CharacterOrderByWithRelationInput } from './character-order-by-with-relation.input';
import { CharacterWhereUniqueInput } from './character-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterCountAggregateInput } from './character-count-aggregate.input';
import { CharacterAvgAggregateInput } from './character-avg-aggregate.input';
import { CharacterSumAggregateInput } from './character-sum-aggregate.input';
import { CharacterMinAggregateInput } from './character-min-aggregate.input';
import { CharacterMaxAggregateInput } from './character-max-aggregate.input';

@ArgsType()
export class CharacterAggregateArgs {

    @Field(() => CharacterWhereInput, {nullable:true})
    @Type(() => CharacterWhereInput)
    where?: CharacterWhereInput;

    @Field(() => [CharacterOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterOrderByWithRelationInput>;

    @Field(() => CharacterWhereUniqueInput, {nullable:true})
    cursor?: CharacterWhereUniqueInput;

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
