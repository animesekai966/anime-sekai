import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AnimeScoreProviderCreateInput {

    @Field(() => Float, {nullable:false})
    score!: number;

    @Field(() => Int, {nullable:false})
    scoredBy!: number;
}
