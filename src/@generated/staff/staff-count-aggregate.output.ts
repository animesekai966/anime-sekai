import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StaffCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    malId!: number;

    @Field(() => Int, {nullable:false})
    anilistId!: number;

    @Field(() => Int, {nullable:false})
    language!: number;

    @Field(() => Int, {nullable:false})
    age!: number;

    @Field(() => Int, {nullable:false})
    gender!: number;

    @Field(() => Int, {nullable:false})
    yearsActive!: number;

    @Field(() => Int, {nullable:false})
    homeTown!: number;

    @Field(() => Int, {nullable:false})
    bloodType!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
