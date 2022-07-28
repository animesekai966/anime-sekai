import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CharacterOnAnimeWhereInput } from './character-on-anime-where.input';
import { Type } from 'class-transformer';
import { CharacterOnAnimeOrderByWithRelationInput } from './character-on-anime-order-by-with-relation.input';
import { CharacterOnAnimeWhereUniqueInput } from './character-on-anime-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CharacterOnAnimeCountAggregateInput } from './character-on-anime-count-aggregate.input';
import { CharacterOnAnimeMinAggregateInput } from './character-on-anime-min-aggregate.input';
import { CharacterOnAnimeMaxAggregateInput } from './character-on-anime-max-aggregate.input';

@ArgsType()
export class CharacterOnAnimeAggregateArgs {

    @Field(() => CharacterOnAnimeWhereInput, {nullable:true})
    @Type(() => CharacterOnAnimeWhereInput)
    where?: CharacterOnAnimeWhereInput;

    @Field(() => [CharacterOnAnimeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CharacterOnAnimeOrderByWithRelationInput>;

    @Field(() => CharacterOnAnimeWhereUniqueInput, {nullable:true})
    cursor?: CharacterOnAnimeWhereUniqueInput;

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
