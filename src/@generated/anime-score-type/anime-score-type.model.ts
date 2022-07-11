import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AnimeScoreType {

    @Field(() => Float, {nullable:false,defaultValue:0})
    score!: number;

    @Field(() => Int, {nullable:false,defaultValue:0})
    scoredBy!: number;
}
