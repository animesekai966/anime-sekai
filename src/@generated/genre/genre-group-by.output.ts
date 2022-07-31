import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GenreType } from '../prisma/genre-type.enum';
import { HideField } from '@nestjs/graphql';
import { GenreCountAggregate } from './genre-count-aggregate.output';
import { GenreAvgAggregate } from './genre-avg-aggregate.output';
import { GenreSumAggregate } from './genre-sum-aggregate.output';
import { GenreMinAggregate } from './genre-min-aggregate.output';
import { GenreMaxAggregate } from './genre-max-aggregate.output';

@ObjectType()
export class GenreGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => GenreType, {nullable:false})
    type!: keyof typeof GenreType;

    @HideField()
    animeIDs?: Array<string>;

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
