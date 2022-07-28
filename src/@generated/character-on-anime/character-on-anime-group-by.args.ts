import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereInput } from './character-on-anime-where.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeOrderByWithAggregationInput } from './character-on-anime-order-by-with-aggregation.input';
import { CharacterOnAnimeScalarFieldEnum } from './character-on-anime-scalar-field.enum';
import { CharacterOnAnimeScalarWhereWithAggregatesInput } from './character-on-anime-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CharacterOnAnimeCountAggregateInput } from './character-on-anime-count-aggregate.input';
import { CharacterOnAnimeMinAggregateInput } from './character-on-anime-min-aggregate.input';
import { CharacterOnAnimeMaxAggregateInput } from './character-on-anime-max-aggregate.input';

@ArgsType()
export class CharacterOnAnimeGroupByArgs {

    @Field(() => CharacterOnAnimeWhereInput, {nullable:true})
    @Type(() => CharacterOnAnimeWhereInput)
    where?: CharacterOnAnimeWhereInput;

    @Field(() => [CharacterOnAnimeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CharacterOnAnimeOrderByWithAggregationInput>;

    @Field(() => [CharacterOnAnimeScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof CharacterOnAnimeScalarFieldEnum>;

    @Field(() => CharacterOnAnimeScalarWhereWithAggregatesInput, {nullable:true})
    having?: CharacterOnAnimeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CharacterOnAnimeCountAggregateInput, {nullable:true})
    _count?: CharacterOnAnimeCountAggregateInput;

    @Field(() => CharacterOnAnimeMinAggregateInput, {nullable:true})
    _min?: CharacterOnAnimeMinAggregateInput;

    @Field(() => CharacterOnAnimeMaxAggregateInput, {nullable:true})
    _max?: CharacterOnAnimeMaxAggregateInput;
}
