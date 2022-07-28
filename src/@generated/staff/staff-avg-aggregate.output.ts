import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class StaffAvgAggregate {

    @Field(() => Float, {nullable:true})
    malId?: number;

    @Field(() => Float, {nullable:true})
    anilistId?: number;
}
