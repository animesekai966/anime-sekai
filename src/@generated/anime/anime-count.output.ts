import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeCount {

    @Field(() => Int, {nullable:false})
    studios?: number;

    @Field(() => Int, {nullable:false})
    producers?: number;

    @Field(() => Int, {nullable:false})
    genres?: number;
}
