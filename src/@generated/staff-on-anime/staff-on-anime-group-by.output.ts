import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { StaffOnAnimeCountAggregate } from './staff-on-anime-count-aggregate.output';
import { StaffOnAnimeMinAggregate } from './staff-on-anime-min-aggregate.output';
import { StaffOnAnimeMaxAggregate } from './staff-on-anime-max-aggregate.output';

@ObjectType()
export class StaffOnAnimeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    relationId!: string;

    @Field(() => String, {nullable:false})
    role!: string;

    @Field(() => String, {nullable:false})
    animeId!: string;

    @Field(() => String, {nullable:false})
    staffId!: string;

    @Field(() => StaffOnAnimeCountAggregate, {nullable:true})
    _count?: StaffOnAnimeCountAggregate;

    @Field(() => StaffOnAnimeMinAggregate, {nullable:true})
    _min?: StaffOnAnimeMinAggregate;

    @Field(() => StaffOnAnimeMaxAggregate, {nullable:true})
    _max?: StaffOnAnimeMaxAggregate;
}
