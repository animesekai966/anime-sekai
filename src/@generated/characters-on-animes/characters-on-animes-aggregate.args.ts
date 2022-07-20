import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharactersOnAnimesWhereInput } from './characters-on-animes-where.input';
import { Type } from 'class-transformer';
import { CharactersOnAnimesOrderByWithRelationInput } from './characters-on-animes-order-by-with-relation.input';
import { CharactersOnAnimesWhereUniqueInput } from './characters-on-animes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharactersOnAnimesCountAggregateInput } from './characters-on-animes-count-aggregate.input';
import { CharactersOnAnimesMinAggregateInput } from './characters-on-animes-min-aggregate.input';
import { CharactersOnAnimesMaxAggregateInput } from './characters-on-animes-max-aggregate.input';

@ArgsType()
export class CharactersOnAnimesAggregateArgs {

    @Field(() => CharactersOnAnimesWhereInput, {nullable:true})
    @Type(() => CharactersOnAnimesWhereInput)
    where?: CharactersOnAnimesWhereInput;

    @Field(() => [CharactersOnAnimesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharactersOnAnimesOrderByWithRelationInput>;

    @Field(() => CharactersOnAnimesWhereUniqueInput, {nullable:true})
    cursor?: CharactersOnAnimesWhereUniqueInput;

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
