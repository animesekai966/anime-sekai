import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EpisodeAvgAggregate {

    @Field(() => Float, {nullable:true})
    number?: number;
}
