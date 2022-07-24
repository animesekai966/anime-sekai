import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class EpisodeSumAggregate {

    @Field(() => Int, {nullable:true})
    number?: number;
}
