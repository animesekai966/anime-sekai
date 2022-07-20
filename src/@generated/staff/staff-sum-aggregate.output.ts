import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StaffSumAggregate {

    @Field(() => Int, {nullable:true})
    malId?: number;

    @Field(() => Int, {nullable:true})
    anilistId?: number;

    @Field(() => Int, {nullable:true})
    age?: number;

    @Field(() => [Int], {nullable:true})
    yearsActive?: Array<number>;
}
