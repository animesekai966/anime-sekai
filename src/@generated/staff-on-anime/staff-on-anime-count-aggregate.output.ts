import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StaffOnAnimeCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    role!: number;

    @Field(() => Int, {nullable:false})
    animeId!: number;

    @Field(() => Int, {nullable:false})
    staffId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
