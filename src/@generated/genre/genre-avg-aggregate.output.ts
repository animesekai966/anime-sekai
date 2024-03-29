import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class GenreAvgAggregate {

    @Field(() => Float, {nullable:true})
    malId?: number;
}
