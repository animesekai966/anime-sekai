import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeCount {

    @Field(() => Int, {nullable:false})
    genres?: number;

    @Field(() => Int, {nullable:false})
    themes?: number;

    @Field(() => Int, {nullable:false})
    demographics?: number;

    @Field(() => Int, {nullable:false})
    studios?: number;
}
