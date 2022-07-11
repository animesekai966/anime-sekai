import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimeGenreWhereInput } from './anime-genre-where.input';
import { Type } from 'class-transformer';
import { AnimeGenreOrderByWithRelationInput } from './anime-genre-order-by-with-relation.input';
import { AnimeGenreWhereUniqueInput } from './anime-genre-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AnimeGenreCountAggregateInput } from './anime-genre-count-aggregate.input';
import { AnimeGenreAvgAggregateInput } from './anime-genre-avg-aggregate.input';
import { AnimeGenreSumAggregateInput } from './anime-genre-sum-aggregate.input';
import { AnimeGenreMinAggregateInput } from './anime-genre-min-aggregate.input';
import { AnimeGenreMaxAggregateInput } from './anime-genre-max-aggregate.input';

@ArgsType()
export class AnimeGenreAggregateArgs {

    @Field(() => AnimeGenreWhereInput, {nullable:true})
    @Type(() => AnimeGenreWhereInput)
    where?: AnimeGenreWhereInput;

    @Field(() => [AnimeGenreOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AnimeGenreOrderByWithRelationInput>;

    @Field(() => AnimeGenreWhereUniqueInput, {nullable:true})
    cursor?: AnimeGenreWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AnimeGenreCountAggregateInput, {nullable:true})
    _count?: AnimeGenreCountAggregateInput;

    @Field(() => AnimeGenreAvgAggregateInput, {nullable:true})
    _avg?: AnimeGenreAvgAggregateInput;

    @Field(() => AnimeGenreSumAggregateInput, {nullable:true})
    _sum?: AnimeGenreSumAggregateInput;

    @Field(() => AnimeGenreMinAggregateInput, {nullable:true})
    _min?: AnimeGenreMinAggregateInput;

    @Field(() => AnimeGenreMaxAggregateInput, {nullable:true})
    _max?: AnimeGenreMaxAggregateInput;
}
