import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GenreCountAggregate } from './genre-count-aggregate.output';
import { GenreAvgAggregate } from './genre-avg-aggregate.output';
import { GenreSumAggregate } from './genre-sum-aggregate.output';
import { GenreMinAggregate } from './genre-min-aggregate.output';
import { GenreMaxAggregate } from './genre-max-aggregate.output';

@ObjectType()
export class AggregateGenre {

    @Field(() => GenreCountAggregate, {nullable:true})
    _count?: GenreCountAggregate;

    @Field(() => GenreAvgAggregate, {nullable:true})
    _avg?: GenreAvgAggregate;

    @Field(() => GenreSumAggregate, {nullable:true})
    _sum?: GenreSumAggregate;

    @Field(() => GenreMinAggregate, {nullable:true})
    _min?: GenreMinAggregate;

    @Field(() => GenreMaxAggregate, {nullable:true})
    _max?: GenreMaxAggregate;
}
