import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeScoreProvider {

    @Field(() => Float, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    scoredBy!: number;
}
