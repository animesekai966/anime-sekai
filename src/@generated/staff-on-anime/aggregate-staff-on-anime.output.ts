import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StaffOnAnimeCountAggregate } from './staff-on-anime-count-aggregate.output';
import { StaffOnAnimeMinAggregate } from './staff-on-anime-min-aggregate.output';
import { StaffOnAnimeMaxAggregate } from './staff-on-anime-max-aggregate.output';

@ObjectType()
export class AggregateStaffOnAnime {

    @Field(() => StaffOnAnimeCountAggregate, {nullable:true})
    _count?: StaffOnAnimeCountAggregate;

    @Field(() => StaffOnAnimeMinAggregate, {nullable:true})
    _min?: StaffOnAnimeMinAggregate;

    @Field(() => StaffOnAnimeMaxAggregate, {nullable:true})
    _max?: StaffOnAnimeMaxAggregate;
}
