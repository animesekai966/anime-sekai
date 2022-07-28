import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { StaffOnAnimeWhereInput } from './staff-on-anime-where.input';
import { Type } from 'class-transformer';
import { StaffOnAnimeOrderByWithRelationInput } from './staff-on-anime-order-by-with-relation.input';
import { StaffOnAnimeWhereUniqueInput } from './staff-on-anime-where-unique.input';
import { Int } from '@nestjs/graphql';
import { StaffOnAnimeCountAggregateInput } from './staff-on-anime-count-aggregate.input';
import { StaffOnAnimeMinAggregateInput } from './staff-on-anime-min-aggregate.input';
import { StaffOnAnimeMaxAggregateInput } from './staff-on-anime-max-aggregate.input';

@ArgsType()
export class StaffOnAnimeAggregateArgs {

    @Field(() => StaffOnAnimeWhereInput, {nullable:true})
    @Type(() => StaffOnAnimeWhereInput)
    where?: StaffOnAnimeWhereInput;

    @Field(() => [StaffOnAnimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<StaffOnAnimeOrderByWithRelationInput>;

    @Field(() => StaffOnAnimeWhereUniqueInput, {nullable:true})
    cursor?: StaffOnAnimeWhereUniqueInput;

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
