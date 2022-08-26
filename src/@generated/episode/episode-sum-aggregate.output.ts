import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class EpisodeSumAggregate {

    @Field(() => Float, {nullable:true})
    number?: number;
}
