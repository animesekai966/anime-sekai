import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class StaffSumAggregate {

    @Field(() => Int, {nullable:true})
    malId?: number;
}
